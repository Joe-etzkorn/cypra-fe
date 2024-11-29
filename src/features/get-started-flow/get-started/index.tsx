import { useFormErrorHandler } from "@hooks/useFormErrorHandler";
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message, Radio, Space } from "antd";
import { useState } from "react";
import { RequestedAccountService } from "../../../services/requested-account.service";
const { TextArea } = Input;

const GetStarted = () => {
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler();

  const [status, setStatus] = useState(false);
  const [usedAspire, setUsedAspire] = useState(true);
  const { mutate: createAccountRequest, isPending } = useMutation({
    mutationFn: RequestedAccountService.createAccountRequest,
    mutationKey: ["/account-requests"],
  });

  const handleSubmit = (values: any) => {
    createAccountRequest(values, {
      onSuccess: () => {
        message.success("Thanks for reaching out to us, we will get back to you soon.");
        setStatus(true);
      },
      onError: (error) => {
        if (error.message) {
          message.error(error.message);
        } else {
          message.error("Something went wrong");
        }
      },
    });
  };

  const handleCheckboxChange = (e: any) => {
    setUsedAspire(e.target.value != 2);
  };
  const handleReturnHomePage = () => {
    setStatus(false);
  };

  if (status) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-[40px] font-bold text-black">
            Thanks for reaching out!
          </h1>
          <p className="common-font-color mt-3 mb-10 text-xl">
            We'll be in touch soon regarding your interest in Cypra to level-up
            your business reporting.
          </p>

          <Form name="layout-multiple-vertical" layout="vertical">
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                className="h-12 font-bold common-btn mt-4 !w-[240px]"
                onClick={handleReturnHomePage}
              >
                Return to Home Page
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F6F6">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[1117px]">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>
        <h1 className="text-[40px] font-bold text-black">Get Started</h1>
        <p className="common-font-color px-52 mt-3 mb-4 text-xl">
          We're excited to get you up and running! Please complete the form
          below and a team member will reach out to you soon.
        </p>
        <p className="text-red-500 px-52 mb-10 text-xl">
          If you team already uses cypra.io, reach out to your account
          administrator to gain access
        </p>

        <Form
          name="layout-multiple-vertical"
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          onFieldsChange={handleFieldsChange}
        >
          <div className="flex space-x-4">
            <Form.Item
              label="Name"
              name="name"
              className="mb-2 common-font-color w-full"
              rules={[
                { required: true, message: "Please input your name!" },
                {
                  min: 2,
                  message: "Name must be at least 2 characters",
                },
              ]}
            >
              <Input className="h-12 common-input" placeholder="Henry Waill" />
            </Form.Item>
            <Form.Item
              label="Phone (Optional)"
              name="phone"
              className="mb-2 common-font-color w-full"
            >
              <Input
                className="h-12 common-input"
                placeholder="(914) 960-4750"
              />
            </Form.Item>
          </div>
          <div className="flex space-x-4">
            <div className="block w-1/2">
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
                <Input
                  className="h-12 common-input"
                  placeholder="HBW Landscaping"
                />
              </Form.Item>
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
                  className="h-12 common-input"
                  placeholder="henry@henrywaill.com"
                />
              </Form.Item>
            </div>
            <Form.Item
              label="Comments (Optional)"
              name="comments"
              className="mb-2 common-font-color w-1/2"
            >
              <TextArea
                className="common-input !h-[134px]"
                placeholder="Really excited about getting this set up. This is last minute, but we are hoping to have everything up and running by this time next week,"
              />
            </Form.Item>
          </div>

          <Form.Item className="!mb-1" name="hasUsedAspire" initialValue={true}>
            <Radio.Group
              className="float-left"
              onChange={handleCheckboxChange}
            >
              <Space direction="vertical" className="items-start">
                <Radio value={true}>Our team currently uses Aspire</Radio>
                <Radio value={false}>
                  Our team uses a different API-enabled software
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          {!usedAspire && (
            <Form.Item className="text-left">
              <p className="text-red-500 text-xl">
                We currently only integrate with Aspire. Share your software
                details above, and we may add it in the future.
              </p>
            </Form.Item>
          )}

          {formErrors.length > 0 && (
            <DisplayErrorMessages formErrors={formErrors} />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="h-12 font-bold common-btn mt-4 !w-[480px]"
              loading={isPending}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GetStarted;
