import React from "react"
import { Layout, Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"
import { useMenuLayout } from "../../stores/menu-layout"

const { Sider } = Layout
const { SubMenu } = Menu

interface AdminOperationsNavigationProps {
  width?: string | number
}

const AdminOperationsNavigation: React.FC<AdminOperationsNavigationProps> = ({
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
          defaultOpenKeys={["admin-operations/reports"]}
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
            Operations
          </Menu.Item>

          <Menu.Item
            key="/admin-operations/dashboard"
            style={{ color: "#141922", paddingLeft: "24px" }}
            onClick={() => handleClick("/admin-operations/dashboard")}
          >
            Dashboard
          </Menu.Item>

          <SubMenu
            key="admin-operations/reports"
            title="Reports"
            style={{ color: "#141922" }}
          >
            <Menu.Item
              key="/admin-operations/reports/crew-leader"
              style={{ paddingLeft: "36px" }}
              onClick={() =>
                handleClick("/admin-operations/reports/crew-leader")
              }
            >
              Crew Leader
            </Menu.Item>
            <Menu.Item
              key="/admin-operations/reports/services"
              style={{ paddingLeft: "36px" }}
              onClick={() => handleClick("/admin-operations/reports/services")}
            >
              Services
            </Menu.Item>
            {/* <Menu.Item
              key="/admin-operations/reports/properties"
              style={{ paddingLeft: "36px" }}
              // onClick={() => handleClick("/admin-operations/reports/properties")}
            >
              Properties
            </Menu.Item> */}
            <Menu.Item
              key="/admin-operations/reports/opportunities"
              style={{ paddingLeft: "36px" }}
              onClick={() => handleClick("/admin-operations/reports/opportunities")}
            >
              Opportunities
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  )
}

export default AdminOperationsNavigation
