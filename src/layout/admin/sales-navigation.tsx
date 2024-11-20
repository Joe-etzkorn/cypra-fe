import { Layout, Menu } from "antd"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useMenuLayout } from "../../stores/menu-layout"

const { Sider } = Layout
const { SubMenu } = Menu

interface AdminSalesNavigationProps {
  width?: string | number
}

const AdminSalesNavigation: React.FC<AdminSalesNavigationProps> = ({
  width = 250,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { toggleOpenMenuLayout } = useMenuLayout()
  const handleClick = (key: string) => {
    navigate(key)
    toggleOpenMenuLayout(false)
  }
  return (
    <Sider width={width} className="bg-[#E1EBEB]">
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
            style={{ color: "#141922" }}
          >
            <Menu.Item
              key="/admin-sales/reports/sales-pipeline"
              style={{ paddingLeft: "36px" }}
              onClick={() => handleClick("/admin-sales/reports/sales-pipeline")}
            >
              Sales Pipeline
            </Menu.Item>
            <Menu.Item
              key="/admin-sales/reports/customer-detail"
              style={{ paddingLeft: "36px" }}
              onClick={() => handleClick("/admin-sales/reports/customer-detail")}
            >
              Customer Detail
            </Menu.Item>
            <Menu.Item
              key="/admin-sales/reports/opportunities-won"
              style={{ paddingLeft: "36px" }}
              onClick={() =>
                handleClick("/admin-sales/reports/opportunities-won")
              }
            >
              Opportunities Won
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  )
}

export default AdminSalesNavigation
