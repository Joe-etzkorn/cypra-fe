import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminNavigation: React.FC = () => {
  return (
    <Sider width={250} className="bg-[#E1EBEB]">
      <div className="">
        <Menu
          className="bg-[#E1EBEB] border-r-0 text-base font-semibold"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          defaultOpenKeys={["reports"]}
          style={{
            backgroundColor: "#E1EBEB",
            borderRight: 0,
          }}
        >
          <Menu.Item key="sales" style={{ fontWeight: "bold", color: "#333" }}>
            Sales
          </Menu.Item>

          <Menu.Item
            key="dashboard"
            style={{ color: "#007b84", paddingLeft: "24px" }}
          >
            Dashboard
          </Menu.Item>

          <SubMenu
            key="reports"
            title="Reports"
            style={{ color: "#333", fontWeight: "bold" }}
          >
            <Menu.Item
              key="sales-pipeline"
              style={{ paddingLeft: "36px", color: "#333" }}
            >
              Sales Pipeline
            </Menu.Item>
            <Menu.Item
              key="opportunities-won"
              style={{ paddingLeft: "36px", color: "#333" }}
            >
              Opportunities Won
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  );
};

export default AdminNavigation;
