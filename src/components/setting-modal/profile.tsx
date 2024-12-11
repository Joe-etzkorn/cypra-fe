import { Button, Form, Input, message, Popconfirm } from "antd";
import FieldItem from "./field-item";
import { useState } from "react";
import "./index.css";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user.service";
import { useProfile } from "@stores/profile";
import { IUserProfile } from "../../types/profile";
import { REGEX } from "@utils/regex";
import ProfileHeader from "./profile-header";
import { AuthService } from "@services/auth.service";

const EditProfile = ({
  initialValues,
  onChangeProfile,
  onClose,
}: {
  initialValues: IUserProfile | null;
  onChangeProfile: (profile: IUserProfile) => void;
  onClose: () => void;
}) => {
  const [form] = Form.useForm();
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: UserService.updateUser,
  });
  const onSaveChanges = (values: IUserProfile) => {
    if (initialValues) {
      updateUser(
        {
          userCognitoId: initialValues.userCognitoId,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
        },
        {
          onSuccess: (data) => {
            message.success("Profile updated successfully");
            form.resetFields();
            if (data.data) {
              onChangeProfile(data.data);
              onClose();
            }
          },
          onError: () => {
            message.error("Something went wrong");
          },
        },
      );
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues || {}}
      onFinish={onSaveChanges}
      onFieldsChange={handleFieldsChange}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex gap-4 flex-col md:flex-row w-fit">
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
      <FieldItem
        label="Email"
        value={initialValues?.email || ""}
        className="py-0"
      />
      <PasswordReset />
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true },
          {
            pattern: REGEX.AWS_PHONE_NUMBER,
            message: "Invalid phone number",
          },
        ]}
      >
        <Input className="!max-w-[170px]" />
      </Form.Item>
      {formErrors.length > 0 && (
        <DisplayErrorMessages formErrors={formErrors} />
      )}
      <div className="flex justify-end gap-4 px-2 md:px-6">
        <Button onClick={onClose} className="!bg-[#F4F6F6]">
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" loading={isPending}>
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

const PasswordReset = () => {
  const { mutate: forgotPassword, isPending } = useMutation({
    mutationFn: AuthService.forgotPassword,
  });
  const { profile } = useProfile();

  const handleResetPassword = () => {
    if (!profile) return;

    forgotPassword(
      {
        email: profile?.email,
      },
      {
        onSuccess: () => {
          message.success("Password reset successfully, please check your email");
        },
        onError: (error: any) => {
          if (error.message) {
            message.error(error.message);
          } else {
            message.error("Something went wrong!");
          }
        },
      });
  };


  return (
    <div className="py-2">
      <div className="text-sm">Password</div>
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center">
        <div className="text-lg font-semibold">••••••••••</div>
        <Popconfirm
          title="Are you sure you want to reset your password?"
          onConfirm={handleResetPassword}
          okText="Yes"
          cancelText="No"
        >
          <Button
            danger
            loading={isPending}
            className="!rounded-lg !bg-[#F4F6F6]"
          >
            Reset Password
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

const ProfileView = ({
  profile,
  onEdit,
}: {
  profile: IUserProfile | null;
  onEdit: () => void;
}) => (
  <>
    <div className="flex gap-4">
      <FieldItem label="First Name" value={profile?.firstName || ""} />
      <FieldItem label="Last Name" value={profile?.lastName || ""} />
    </div>
    <FieldItem label="Email" value={profile?.email || ""} />
    <div className="py-2">
      <div className="text-sm">Password</div>
      <div className="flex flex-row gap-2 items-center">
        <div className="text-lg font-semibold">••••••••••</div>
      </div>
      <FieldItem label="Phone Number" value={profile?.phone || ""} />
    </div>
    <div className="flex justify-end gap-4 px-2 md:px-6">
      <Button onClick={onEdit} className="!bg-[#F4F6F6]">
        Make Changes
      </Button>
    </div>
  </>
);

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const { profile, setProfile } = useProfile();

  return (
    <div className="flex flex-col justify-between px-2 md:px-6 py-4 h-full ">
      <ProfileHeader />

      {isEditProfile ? (
        <EditProfile
          initialValues={profile}
          onClose={() => setIsEditProfile(false)}
          onChangeProfile={setProfile}
        />
      ) : (
        <ProfileView profile={profile} onEdit={() => setIsEditProfile(true)} />
      )}
    </div>
  );
};

export default Profile;
