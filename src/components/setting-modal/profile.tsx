import { Button, Form, Input, message } from "antd"
import FieldItem from "./field-item"
import { useState } from "react"
import "./index.css"
import { useFormErrorHandler } from "@hooks/useFormErrorHandler"
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages"

interface ProfileInfo {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

const EditProfile = ({
  initialValues,
  onChangeProfile,
  onClose,
}: {
  initialValues: ProfileInfo
  onChangeProfile: (profile: ProfileInfo) => void
  onClose: () => void
}) => {
  const [form] = Form.useForm()
  const { formErrors, onFinishFailed, handleFieldsChange } = useFormErrorHandler();


  const onSaveChanges = (values: ProfileInfo) => {
    onChangeProfile(values)
    onClose()
    message.success("Profile updated successfully")
    form.resetFields()
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
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
      <FieldItem label="Email" value={initialValues.email} className="py-0" />
      <PasswordReset />
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[{ required: true }]}
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
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </div>
    </Form>
  )
}

const PasswordReset = () => (
  <div className="py-2">
    <div className="text-sm">Password</div>
    <div className="flex flex-col gap-2 items-start md:flex-row md:items-center">
      <div className="text-lg font-semibold">••••••••••</div>
      <Button
        danger
        className="!rounded-lg !bg-[#F4F6F6]"
        onClick={() => message.success("Reset password success")}
      >
        Reset Password
      </Button>
    </div>
  </div>
)

const ProfileView = ({
  profile,
  onEdit,
}: {
  profile: ProfileInfo
  onEdit: () => void
}) => (
  <>
    <div className="flex gap-4">
      <FieldItem label="First Name" value={profile.firstName} />
      <FieldItem label="Last Name" value={profile.lastName} />
    </div>
    <FieldItem label="Email" value={profile.email} />
    <div className="py-2">
      <div className="text-sm">Password</div>
      <div className="flex flex-row gap-2 items-center">
        <div className="text-lg font-semibold">••••••••••</div>
      </div>
      <FieldItem label="Phone Number" value={profile.phoneNumber} />
    </div>
    <div className="flex justify-end gap-4 px-2 md:px-6">
      <Button onClick={onEdit} className="!bg-[#F4F6F6]">
        Make Changes
      </Button>
    </div>
  </>
)

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false)
  const [profile, setProfile] = useState<ProfileInfo>({
    firstName: "Henry",
    lastName: "Wail",
    email: "henry@henrywaill.com",
    phoneNumber: "(123) 456-7890",
  })

  return (
    <div className="flex flex-col justify-between px-2 md:px-6 py-4 h-full ">
      <div className="text-2xl font-bold py-2">Profile</div>
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
  )
}

export default Profile
