import { Button, Form, Input, message } from "antd";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { useUserInvitedInfo } from "@stores/user-invited-info";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { UserService } from "@services/user.service";
import { MESSAGE } from "@constants/message";
import { useState } from "react";
import CreateUserSuccess from "@components/create-success";

const UserInvited = () => {
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();
  const { userInvitedInfo } = useUserInvitedInfo();
  const { mutate: createInvitedUser, isPending } = useMutation({
    mutationFn: UserService.createUser,
  });
  const [openCreateSuccess, setOpenCreateSuccess] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    if (!userInvitedInfo) return;

    createInvitedUser(
      {
        email: userInvitedInfo.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        companyName: "",
      },
      {
        onSuccess: () => {
          setOpenCreateSuccess(true);
        },
        onError: (error) => {
          if (error.message) {
            message.error(error.message);
          } else {
            message.error(MESSAGE.COMMON_ERROR);
          }
        },
      },
    );
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#F4F6F6">
        <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-[40px] font-bold text-black">
            You've been invited!
          </h1>
          <p className="common-font-color px-14 mt-3 mb-10 text-xl">
            <strong>Henry Waill</strong> has invited you to join{" "}
            <strong>HBW Landscaping</strong>. Create your account below.
          </p>

          <Form
            name="layout-multiple-vertical"
            layout="vertical"
            onFinishFailed={onFinishFailed}
            onFieldsChange={handleFieldsChange}
            initialValues={{
              email: userInvitedInfo?.email,
              firstName: userInvitedInfo?.firstName,
              lastName: userInvitedInfo?.lastName,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              className="mb-2 common-font-color text-left"
            >
              <p className="text-[#141922]">{userInvitedInfo?.email}</p>
            </Form.Item>
            <div className="flex space-x-4">
              <Form.Item
                label="First Name"
                name="firstName"
                className="mb-2 common-font-color w-full"
                rules={[
                  { required: true, message: "Please input your first name!" },
                  {
                    min: 2,
                    message: "First name must be at least 2 characters",
                  },
                ]}
              >
                <Input className="h-12 common-input" placeholder="John" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                className="mb-2 common-font-color w-full"
                rules={[
                  { required: true, message: "Please input your last name!" },
                  {
                    min: 2,
                    message: "Last name must be at least 2 characters",
                  },
                ]}
              >
                <Input className="h-12 common-input" placeholder="Doe" />
              </Form.Item>
            </div>

            <Form.Item
              label="Password"
              name="password"
              className="mb-2 common-font-color"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 8,
                  message: "Password must be at least 8 characters",
                },
                {
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message:
                    "Password must include uppercase, lowercase, digit, and special character",
                },
              ]}
            >
              <Input.Password
                type="password"
                className="h-12 w-full common-input"
                placeholder="*********"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              className="mb-2 common-font-color"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                className="h-12 w-full common-input"
                placeholder="*********"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            {formErrors.length > 0 && (
              <DisplayErrorMessages formErrors={formErrors} />
            )}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 font-bold common-btn mt-10"
                loading={isPending}
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <CreateUserSuccess
        open={openCreateSuccess}
        onClose={() => setOpenCreateSuccess(false)}
      />
    </>
  );
};

export default UserInvited;
