import { Button, Form, Input, Radio, Space } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const GetStarted = () => {
  const [status, setStatus] = useState(false);
  const handleSubmit = () => {
    setStatus(true);
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
            We'll be in touch soon regarding your interest in Cypra to level-up your business reporting.
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

        <Form name="layout-multiple-vertical" layout="vertical">
          <div className="flex space-x-4">
            <Form.Item
              label="Name"
              name="name"
              className="mb-2 common-font-color w-full"
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

          <Form.Item>
            <Radio.Group className="float-left">
              <Space direction="vertical" className="items-start">
                <Radio value={1}>Our team currently uses Aspire</Radio>
                <Radio value={2}>
                  Our team uses a different API-enabled software
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              className="h-12 font-bold common-btn mt-4 !w-[480px]"
              onClick={handleSubmit}
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
