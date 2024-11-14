import React from "react";
import { Button, Checkbox, Form } from "antd";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AdminPricing: React.FC<props> = ({ setStep }) => {
  const handleSubmit = () => {
    setStep(5);
  };
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="mb-4">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>

          <h1 className="text-2xl font-bold text-[#141922]">Pricing</h1>
          <p className="text-[#667174] text-xl mt-2 px-8">
            Your pricing structure is dependent upon multiple factors, including
            company size and associated data volume.
          </p>
          <h2 className="text-lg font-bold text-[#656565] mt-10">
            Enterprise Plan
          </h2>
          <div className="flex space-x-4 justify-center items-center h-[70px]">
            <p className="text-[58px] font-bold text-[#518D9C] mt-2">$XX</p>
            <div className="text-left">
              <span className="font-normal text-xl text-[#656565]">
                per month
              </span>
              <p className="text-[#656565] text-xs">Three month minimum</p>
            </div>
          </div>

          <Form
            layout="vertical"
            className="mt-10"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            onFieldsChange={handleFieldsChange}
          >
            <Form.Item
              name="understand"
              valuePropName="checked"
              className="text-center"
              rules={[{ required: true, message: "Please check the box!" }]}
            >
              <Checkbox className="text-[#141922] text-2xl">
                I understand my subscription
              </Checkbox>
            </Form.Item>
            {formErrors.length > 0 && (
              <DisplayErrorMessages formErrors={formErrors} />
            )}
            <Form.Item>
              <Button
                type="primary"
                className="mt-1 common-btn"
                htmlType="submit"
              >
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminPricing;
