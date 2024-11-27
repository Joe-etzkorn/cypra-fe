import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useMenuLayout } from "../../stores/menu-layout";

const { Sider } = Layout;
// const { SubMenu } = Menu;

interface SuperAdminNavigationProps {
  width?: string | number;
}

const SuperAdminNavigation: React.FC<SuperAdminNavigationProps> = ({
  width = 250,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleOpenMenuLayout } = useMenuLayout();
  const handleClick = (key: string) => {
    navigate(key);
    toggleOpenMenuLayout(false);
  };
  return (
    <Sider width={width} className="bg-[#E1EBEB]">
      <div className="">
        <Menu
          className="bg-[#E1EBEB] border-r-0 text-base font-semibold"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={["account-request"]}
          style={{
            backgroundColor: "#E1EBEB",
            borderRight: 0,
          }}
        >
          <Menu.Item
            key="super-admin"
            style={{ fontWeight: "bold", color: "#141922" }}
            className="text-[18px]"
          >
            Overview
          </Menu.Item>

          <Menu.Item
            key="/dashboard"
            style={{ color: "#141922", paddingLeft: "24px" }}
            onClick={() => handleClick("/account-request")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="/account-request"
            style={{ color: "#141922", paddingLeft: "24px" }}
            onClick={() => handleClick("/account-request")}
          >
            Account Request
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default SuperAdminNavigation;
