import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message || "";
  const subMessage = location.state?.subMessage || "";

  const handleTroubleSignIn = () => {
    navigate("/trouble-signin");
  };

  const handleSignup = () => {
    navigate("/get-started");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className={`${message ? 'text-[35px]' : 'text-[40px]'} font-bold text-black`}>{message || "Sign In"}</h1>
        <p className="common-font-color px-8 mt-3 mb-10 text-xl">
          {subMessage || "Welcome back! Please enter your login credentials to access your account."}
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            className="mb-2 common-font-color"
            rules={[{ required: true, message: "Please input your email!" }, { type: "email", message: "Invalid email!" }]}
          >
            <Input className="h-12 w-full common-input" placeholder="henry@henrywaill.com"/>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="mb-2 common-font-color"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" className="h-12 w-full common-input" placeholder="*********"/>
          </Form.Item>
          <div className="flex justify-between items-center mb-6">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="common-font-color">Remember me</Checkbox>
            </Form.Item>
            <a onClick={handleTroubleSignIn} className="text-teal-600 font-bold">
              Having trouble logging in?
            </a>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full h-12 font-bold common-btn">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-4 common-font-color">
          Don’t have an account?{" "}
          <a onClick={handleSignup} className="text-teal-600 font-bold">
            Get started
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
