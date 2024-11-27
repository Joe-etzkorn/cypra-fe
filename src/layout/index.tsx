import React from "react";
import { Layout, ConfigProvider } from "antd";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: "#57B2C4" } }}
    >
      <Layout className="h-screen bg-[#E1EBEB] overflow-y-auto">
        <div className="bg-[rgb(225,235,235)] size-full">{children}</div>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
