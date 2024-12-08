import { REQUEST_URL } from "@constants/req-route";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { UserInvitedService } from "@services/user-invited.service";
import { UserService } from "@services/user.service";
import { useProfile } from "@stores/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cn } from "@utils/cn";
import { Button, Form, Input, message, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { IUserProfile } from "../../types/profile";
import FieldItem from "./field-item";
import ProfileHeader from "./profile-header";
import { ROLE } from "@constants/role";

interface OrganizationFormValues extends IUserProfile {
  isAdmin?: boolean;
}

const OrganizationAction = ({
  initialValues,
  onClose,
  isInvite = false,
}: {
  onClose: () => void;
  initialValues?: IUserProfile;
  isInvite?: boolean;
}) => {
  const [form] = Form.useForm<OrganizationFormValues>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { profile } = useProfile();
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  const { mutate: inviteUser, isPending: isInviting } = useMutation({
    mutationFn: UserInvitedService.inviteUser,
  });

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: UserService.deleteUser,
    onSuccess: () => {
      message.success("Deleted user successfully");
      queryClient.invalidateQueries({ queryKey: [REQUEST_URL.COMPANY_USERS] });
      onClose();
    },
    onError: (error) => {
      message.error(error.message ?? "Something went wrong");
    },
  });

  const handleSubmit = (values: OrganizationFormValues) => {
    if (isInvite && profile) {
      inviteUser(
        {
          userInvitedId: profile.id,
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
        },
        {
          onSuccess: () => {
            message.success("Invited user successfully");
            onClose();
            navigate("/admin-sales/dashboard");
            form.resetFields();
          },
          onError: (error) => {
            message.error(error.message ?? "Something went wrong");
          },
        },
      );
    }
  };

  const handleDelete = () => {
    if (!initialValues?.userCognitoId || !profile?.id) return;
    deleteUser({
      userCognitoId: initialValues.userCognitoId,
      adminId: profile.id,
    });
  };

  const formFirstName = Form.useWatch("firstName", form) ?? "--";
  const formLastName = Form.useWatch("lastName", form) ?? "--";
  const hasDeleteAction =
    // Only admin can delete user
    initialValues?.id !== profile?.id &&
    profile?.roleId === +ROLE.ADMIN &&
    !isInvite;

  const renderActionButtons = () => (
    <div
      className={cn(
        "flex justify-end gap-4 px-2 md:px-6",
        !isInvite && "flex-col md:flex-row py-2 md:py-0",
      )}
    >
      <Button onClick={onClose} className="!bg-[#F4F6F6]">
        Cancel
      </Button>
      {hasDeleteAction && (
        <Button
          danger
          className="!bg-[#EF6F6C] text-white hover:!text-white"
          onClick={handleDelete}
          loading={isDeleting}
        >
          Delete
        </Button>
      )}
      {isInvite && (
        <Button type="primary" htmlType="submit" loading={isInviting}>
          Invite user
        </Button>
      )}
    </div>
  );

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialValues}
      className="h-full flex flex-col justify-between"
      onFieldsChange={handleFieldsChange}
      onFinishFailed={onFinishFailed}
    >
      <div className="h-full w-fit">
        <ProfileHeader
          firstName={isInvite ? formFirstName : initialValues?.firstName}
          lastName={isInvite ? formLastName : initialValues?.lastName}
        />

        {isInvite ? (
          <OrganizationFormFields />
        ) : (
          <OrganizationViewFields initialValues={initialValues} />
        )}
      </div>

      {formErrors.length > 0 && (
        <DisplayErrorMessages formErrors={formErrors} />
      )}

      {renderActionButtons()}
    </Form>
  );
};

const OrganizationFormFields = () => (
  <>
    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "First Name is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Last Name is required" }]}
      >
        <Input />
      </Form.Item>
    </div>
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: "Email is required" },
        { type: "email", message: "Invalid email format" },
      ]}
    >
      <Input className="!max-w-[360px]" />
    </Form.Item>
  </>
);

const OrganizationViewFields = ({
  initialValues,
}: {
  initialValues?: IUserProfile;
}) => {
  const { profile } = useProfile();
  const { mutate: toggleAdminPrivilege, isPending } = useMutation({
    mutationFn: UserService.toggleAdminPrivilege,
  });
  const queryClient = useQueryClient();

  const handleToggleAdmin = (value: boolean) => {
    if (!initialValues?.id || !profile?.id) return;
    toggleAdminPrivilege(
      {
        userId: initialValues.id,
        adminId: profile.id,
        isAdmin: value ? 1 : 0,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [REQUEST_URL.COMPANY_USERS],
          });
          message.success("Successfully");
        },
        onError: (error) => {
          message.error(error.message ?? "Something went wrong");
        },
      },
    );
  };

  const hasGrantAdminPrivilege =
    // Only admin can grant admin privilege for user
    initialValues?.roleId === +ROLE.USER && profile?.roleId === +ROLE.ADMIN;

  return (
    <>
      <FieldItem
        label="Email"
        value={initialValues?.email || ""}
        className="py-0"
      />
      {hasGrantAdminPrivilege && (
        <div className="flex items-center gap-2 py-2 text-sm">
          Administrator?{" "}
          <Switch
            loading={isPending}
            defaultChecked={initialValues?.isAdministrator === 1}
            onChange={(value) => handleToggleAdmin(value)}
          />
        </div>
      )}
    </>
  );
};

export default OrganizationAction;
