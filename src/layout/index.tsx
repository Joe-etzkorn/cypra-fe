import React from "react";
import { Layout, ConfigProvider } from "antd";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ConfigProvider>
      <Layout className="h-screen bg-[#E1EBEB] overflow-y-auto">
        <div className="bg-[rgb(225,235,235)] h-full">{children}</div>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
