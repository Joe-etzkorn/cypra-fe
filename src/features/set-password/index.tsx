import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import CreateUserSuccess from "@components/create-success";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { AuthService } from "@services/auth.service";
import { useResetPasswordInfo } from "@stores/reset-password-info";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";

const SetPassword = () => {
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: AuthService.resetPassword,
  });

  const { resetPasswordInfo } = useResetPasswordInfo();

  const [openSuccess, setOpenSuccess] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    if (!resetPasswordInfo) return;
    resetPassword(
      {
        token: resetPasswordInfo?.resetToken,
        newPassword: values.password,
      },
      {
        onSuccess: () => {
          setOpenSuccess(true);
        },
        onError: (error: any) => {
          if (error.message) {
            message.error(error.message);
          } else {
            message.error("Something went wrong!");
          }
        },
      },
    );
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-[40px] font-bold text-black">
            Set your password
          </h1>
          <p className="common-font-color px-12 mt-3 mb-10 text-xl">
            Must be at least 8 characters.
          </p>

          <Form
            name="layout-multiple-vertical"
            layout="vertical"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            onFieldsChange={handleFieldsChange}
          >
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
              name="confirm_password"
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
                Set Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <CreateUserSuccess
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        title="Password Reset Successful"
        description="Please enter your login credentials to access your account."
        navigateTo="/signin"
        buttonText="Go to Sign In"
      />
    </>
  );
};

export default SetPassword;
