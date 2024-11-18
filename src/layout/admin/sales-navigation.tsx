import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminSalesNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (key: string) => {
    navigate(key);
  };
  return (
    <Sider width={250} className="bg-[#E1EBEB]">
      <div className="">
        <Menu
          className="bg-[#E1EBEB] border-r-0 text-base font-semibold"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={["admin-sales/reports"]}
          style={{
            backgroundColor: "#E1EBEB",
            borderRight: 0,
          }}
        >
          <Menu.Item
            key="sales"
            style={{ fontWeight: "bold", color: "#141922" }}
            className="text-[18px]"
          >
            Sales
          </Menu.Item>

          <Menu.Item
            key="/admin-sales/dashboard"
            style={{ color: "#141922", paddingLeft: "24px" }}
            onClick={() => handleClick("/admin-sales/dashboard")}
          >
            Dashboard
          </Menu.Item>

          <SubMenu
            key="admin-sales/reports"
            title="Reports"
            style={{ color: "#141922"}}
          >
            <Menu.Item
              key="/admin-sales/reports/sales-pipeline"
              style={{ paddingLeft: "36px"}}
              onClick={() => handleClick("/admin-sales/reports/sales-pipeline")}
            >
              Sales Pipeline
            </Menu.Item>
            <Menu.Item
              key="/admin-sales/reports/opportunities-won"
              style={{ paddingLeft: "36px"}}
              onClick={() => handleClick("/admin-sales/reports/opportunities-won")}
            >
              Opportunities Won
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  );
};

export default AdminSalesNavigation;
