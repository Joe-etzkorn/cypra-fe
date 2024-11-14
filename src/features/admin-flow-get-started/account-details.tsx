import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { Button, Form, Input } from "antd";

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AdminAccountDetails: React.FC<props> = ({ setStep }) => {
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  const handleSubmit = () => {
    setStep(3);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F6F6">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className="text-[40px] font-bold text-black">Account Details</h1>
        <p className="common-font-color px-14 mt-3 mb-10 text-xl">
          Tell us a little about yourself and your company. Set your login
          credentials.
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          onFieldsChange={handleFieldsChange}
        >
          <Form.Item
            label="Email"
            name="email"
            className="mb-2 common-font-color text-left"
          >
            <p className="text-[#141922]">george@ofthejungle.com</p>
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
              <Input className="h-12 common-input" placeholder="George" />
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
              <Input className="h-12 common-input" placeholder="Wash" />
            </Form.Item>
          </div>
          <div className="flex space-x-4">
            <Form.Item
              label="Password"
              name="password"
              className="mb-2 common-font-color w-full"
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
              name="confirmPassword"
              className="mb-2 common-font-color w-full"
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
          </div>
          <Form.Item
            label="Company Name"
            name="companyName"
            className="mb-2 common-font-color w-full"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
              {
                min: 2,
                message: "Company name must be at least 2 characters",
              },
            ]}
          >
            <Input className="h-12 common-input" placeholder="Company XYZ" />
          </Form.Item>

          {formErrors.length > 0 && (
            <DisplayErrorMessages formErrors={formErrors} />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 font-bold common-btn mt-10"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminAccountDetails;
