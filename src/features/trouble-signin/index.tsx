import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const TroubleSignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSetPassword = () => {
    navigate("/set-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className="text-[40px] font-bold text-black">Trouble signing in?</h1>
        <p className="common-font-color px-12 mt-3 mb-10 text-xl">
          Don’t worry! We will send reset instructions to your email.
        </p>

        <Form name="layout-multiple-vertical" layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            className="mb-2 common-font-color"
          >
            <Input className="h-12 w-full common-input" placeholder="henry@henrywaill.com" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              className="w-full h-12 font-bold common-btn mt-10"
              onClick={handleSetPassword}
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-4 common-font-color">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <span onClick={handleSignIn} className="common-font-color font-bold cursor-pointer">
            Back to sign-in
          </span>
        </p>
      </div>
    </div>
  );
};

export default TroubleSignIn;
