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

        <Form name="layout-multiple-vertical" layout="vertical">
          <Form.Item
            label="Password"
            name="password"
            className="mb-2 common-font-color"
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
              htmlType="button"
              className="w-full h-12 font-bold common-btn mt-10"
              onClick={handleSubmit}
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
