import { Avatar, Button, Form, Input, message, Spin, Switch } from "antd";
import { useState } from "react";
import FieldItem from "./field-item";
import { cn } from "@utils/cn";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { getInitials, randomColor } from "@utils/common";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserService } from "../../services/user.service";
import { useProfile } from "@stores/profile";
import { IUserProfile } from "../../types/profile";
import { UserInvitedService } from "../../services/user-invited.service";
import ProfileHeader from "./profile-header";

const OrganizationAction = ({
  initialValues,
  onChangeInfo,
  onClose,
  isInvite = false,
}: {
  onChangeInfo: (info: IUserProfile, isDelete?: boolean) => void;
  onClose: () => void;
  initialValues?: IUserProfile;
  isInvite?: boolean;
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();
  const { mutate: inviteUser, isPending } = useMutation({
    mutationFn: UserInvitedService.inviteUser,
  });

  const { profile } = useProfile();

  const onSaveChanges = (values: IUserProfile, isDelete?: boolean) => {
    onChangeInfo({ ...initialValues, ...values }, isDelete);
    form.resetFields();
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
          },
          onError: (error) => {
            message.error(error.message ?? "Something went wrong");
          },
        },
      );
    }
  };

  const formFirstName = Form.useWatch("firstName", form) ?? "--";
  const formLastName = Form.useWatch("lastName", form) ?? "--";

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSaveChanges}
      initialValues={initialValues}
      className="h-full flex flex-col justify-between"
      onFieldsChange={handleFieldsChange}
      onFinishFailed={onFinishFailed}
    >
      <div className="h-full w-fit">
        <ProfileHeader
          firstName={isInvite ? formFirstName : undefined}
          lastName={isInvite ? formLastName : undefined}
        />
        {isInvite && (
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
        )}

        {isInvite ? (
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
        ) : (
          <FieldItem
            label="Email"
            value={initialValues?.email || ""}
            className="py-0"
          />
        )}
        {!isInvite && initialValues?.roleId === 3 && (
          <div className="flex items-center gap-2 py-2 text-sm">
            Administrator? <Switch />
          </div>
        )}
      </div>
      {formErrors.length > 0 && (
        <DisplayErrorMessages formErrors={formErrors} />
      )}
      <div
        className={cn(
          "flex justify-end gap-4 px-2 md:px-6",
          !isInvite && "flex-col md:flex-row py-2 md:py-0",
        )}
      >
        <Button onClick={onClose} className="!bg-[#F4F6F6]">
          Cancel
        </Button>
        {!isInvite && initialValues?.id !== profile?.id && (
          <Button
            onClick={() =>
              onSaveChanges({ ...initialValues } as IUserProfile, true)
            }
            danger
            className="!bg-[#EF6F6C] text-white hover:!text-white"
          >
            Delete
          </Button>
        )}
        {isInvite && (
          <Button type="primary" htmlType="submit" loading={isPending}>
            Invite user
          </Button>
        )}
      </div>
    </Form>
  );
};

const Organization = () => {
  const [action, setAction] = useState<"invite" | "edit">();

  const [accountInfo, setAccountInfo] = useState<IUserProfile>();
  const { profile } = useProfile();
  const { data, isFetching } = useQuery({
    queryKey: ["organization"],
    queryFn: () =>
      UserService.getUsersOrganization({
        userId: profile?.id || 0,
      }),
    enabled: !!profile,
  });

  const organizationData: IUserProfile[] =
    data?.data?.sort((a: any, b: any) => a.roleId - b.roleId) || [];

  const handleDelete = (_: IUserProfile) => {};

  const handleInvite = (_: IUserProfile) => {};

  const renderContent = () => {
    if (action === "edit") {
      return (
        <OrganizationAction
          initialValues={accountInfo}
          onChangeInfo={(info, isDelete) => {
            if (isDelete) {
              handleDelete(info);
            }
          }}
          onClose={() => setAction(undefined)}
        />
      );
    }

    return (
      <OrganizationAction
        onChangeInfo={handleInvite}
        onClose={() => setAction(undefined)}
        isInvite={true}
      />
    );
  };

  return (
    <div className="px-2 md:px-6 py-4 h-full flex flex-col">
      {action === undefined ? (
        <>
          <div className="text-2xl font-bold py-2">G&G Landscape</div>
          <div className="h-full">
            <div className="py-1">Team Members</div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {isFetching ? (
                <Spin />
              ) : (
                organizationData.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md p-2"
                    onClick={() => {
                      setAccountInfo(member);
                      setAction("edit");
                    }}
                  >
                    <Avatar style={{ backgroundColor: randomColor() }}>
                      {getInitials(`${member.firstName} ${member.lastName}`)}
                    </Avatar>
                    <div>
                      <div className="text-lg font-semi line-clamp-1">
                        {member.firstName} {member.lastName}{" "}
                        {member.roleId === 2 ? "(me)" : ""}
                      </div>
                      <div className="text-sm text-gray-500">
                        {member.lastName}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-end gap-4 px-2 md:px-6">
            <Button
              onClick={() => setAction("invite")}
              className="!bg-[#F4F6F6]"
            >
              Invite Member
            </Button>
          </div>
        </>
      ) : (
        <div className="h-full">{renderContent()}</div>
      )}
    </div>
  );
};

export default Organization;
