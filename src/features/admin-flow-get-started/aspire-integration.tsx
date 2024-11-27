import { METHOD } from "@constants/common";
import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { useApiCredentials } from "@stores/apire-credentials";
import { Button, Form, Input } from "antd";
import React from "react";
import { AspireService } from "../../services/aspire.service";

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AdminAspireIntegration: React.FC<props> = ({ setStep }) => {
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();
  const { setApiCredentials } = useApiCredentials();

  const handleSubmit = async (values: any) => {
    const response = await AspireService.sendAspireRequest(
      METHOD.POST,
      "Authorization",
      {
        ClientId: values.clientId,
        Secret: values.clientSecret,
      },
    );
    if (response) {
      setApiCredentials(values);
      setStep(4);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className={`text-[40px] font-bold text-black`}>
          Aspire Integration
        </h1>
        <p className="common-font-color px-8 mt-3 mb-10 text-xl">
          Aspire API credentials are required to retrieve and display up-to-date
          information about your operations.
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          onFieldsChange={handleFieldsChange}
        >
          <Form.Item
            label="Client ID"
            name="clientId"
            className="mb-2 common-font-color"
            rules={[
              { required: true, message: "Please input your client ID!" },
            ]}
          >
            <Input
              className="h-12 w-full common-input"
              placeholder="fhiahofaihf"
            />
          </Form.Item>
          <Form.Item
            label="Client Secret"
            name="clientSecret"
            className="mb-2 common-font-color"
            rules={[
              { required: true, message: "Please input your client secret!" },
            ]}
          >
            <Input
              type="password"
              className="h-12 w-full common-input"
              placeholder="*********"
            />
          </Form.Item>

          {formErrors.length > 0 && (
            <DisplayErrorMessages formErrors={formErrors} />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-10 h-12 font-bold common-btn"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminAspireIntegration;
