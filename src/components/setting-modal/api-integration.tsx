import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import FieldItem from "./field-item";
import { useProfile } from "@stores/profile";

const APIIntegration = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const { profile } = useProfile();
  const [credentials, setCredentials] = useState({
    clientId: profile?.clientId || "",
    secret: profile?.clientSecret || "",
  });

  const handleSubmit = async (values: { clientId: string; secret: string }) => {
    setIsEditing(false);
    setCredentials(values);
    message.success("Updated credentials successfully");
  };

  const convertToMaskedString = (value: string) => {
    return value.replace(/./g, "•");
  };

  return (
    <div className="px-6 py-4 flex flex-col justify-between h-full">
      <div className="text-2xl font-bold pb-2">Aspire API Integration</div>
      <div className="h-full">
        {!isEditing ? (
          <>
            <FieldItem label="Client ID" value={credentials?.clientId || ""} />
            <FieldItem
              label="Secret"
              value={convertToMaskedString(credentials?.secret || "")}
            />
          </>
        ) : (
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Client ID"
              name="clientId"
              initialValue={profile?.clientId}
            >
              <Input className="!max-w-[360px]" />
            </Form.Item>
            <Form.Item
              label="Secret"
              name="secret"
              initialValue={profile?.clientSecret}
            >
              <Input.Password className="!max-w-[360px]" />
            </Form.Item>
          </Form>
        )}
      </div>
      <div className="flex justify-end gap-4 px-2 md:px-6">
        {!isEditing ? (
          <Button className="!bg-[#F4F6F6]" onClick={() => setIsEditing(true)}>
            Update Credentials
          </Button>
        ) : (
          <>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button type="primary" onClick={() => form.submit()}>
              Save
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default APIIntegration;
