import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../services/auth.service";
import { message } from "antd";
import Cookies from "js-cookie";
import { COOKIE_ITEM } from "@constants/common";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { ROLE } from "@constants/role";

const SuperAdminSignin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const messageLocation = location.state?.message || "";
  const subMessage = location.state?.subMessage || "";

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: AuthService.login,
    mutationKey: ["/auth/login"],
  });

  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  const handleSignIn = async (values: any) => {
    const variables = {
      email: values.email,
      password: values.password,
      //using for super admin login
      isSuperAdmin: true,
    };
    signIn(variables, {
      onSuccess: (res) => {
        message.success("Login success");
        Cookies.set(COOKIE_ITEM.ACCESS_TOKEN, res.data.accessToken);
        Cookies.set(COOKIE_ITEM.ROLE, ROLE.SUPER_ADMIN);
        navigate("/account-request");
      },
      onError: (error) => {
        if (error.message) {
          message.error(error.message);
        } else {
          message.error("Login failed");
        }
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1
          className={`${
            messageLocation ? "text-[35px]" : "text-[40px]"
          } font-bold text-black`}
        >
          {messageLocation || "Sign In"}
        </h1>
        <p className="common-font-color px-8 mt-3 mb-2 text-xl">
          {subMessage ||
            "Welcome back! Please enter your login credentials to access your account."}
        </p>
        <p className="text-sm mb-10 text-gray-500 italic">
          Using for super admin only
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
          onFinishFailed={onFinishFailed}
          onFieldsChange={handleFieldsChange}
          onFinish={handleSignIn}
        >
          <Form.Item
            label="Email"
            name="email"
            className="mb-2 common-font-color"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Invalid email!" },
            ]}
          >
            <Input
              className="h-12 w-full common-input"
              placeholder="henry@henrywaill.com"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="mb-2 common-font-color"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="h-12 w-full common-input"
              placeholder="*********"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="common-font-color">Remember me</Checkbox>
            </Form.Item>
          </div>
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
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SuperAdminSignin;
