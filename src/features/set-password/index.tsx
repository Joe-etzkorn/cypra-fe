import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const SetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signin", {
      state: {
        message: "Password Reset Successful",
        subMessage:
          "Please enter your login credentials to access your account.",
      },
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className="text-[40px] font-bold text-black">Set your password</h1>
        <p className="common-font-color px-12 mt-3 mb-10 text-xl">
          Must be at least 8 characters.
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
          onFinish={handleSubmit}
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
            <Input
              type="password"
              className="h-12 w-full common-input"
              placeholder="*********"
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
            <Input
              type="password"
              className="h-12 w-full common-input"
              placeholder="*********"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 font-bold common-btn mt-10"
            >
              Set Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SetPassword;
