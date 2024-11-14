import React from "react";
import { Layout, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  return (
    <Header className="bg-[#E1EBEB] flex justify-between items-center px-7">
      <p className="text-2xl text-[#141922] font-bold">G&G Landscaping</p>
      <Space.Compact className="rounded-[70px] rounded-input-header">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="what are you looking for?"
          className="w-[320px]"
        />
      </Space.Compact>
    </Header>
  );
};

export default AdminHeader;
