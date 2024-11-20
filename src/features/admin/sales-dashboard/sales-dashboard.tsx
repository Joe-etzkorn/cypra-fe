import SalesDashboardContent from "@features/admin/sales-dashboard/sales-dashboard-content"
import AdminAside from "@layout/admin/aside"
import AdminHeader from "@layout/admin/header"
import AdminSalesNavigation from "@layout/admin/sales-navigation"
import { Drawer } from "antd"
import { useMenuLayout } from "../../../stores/menu-layout"

const AdminSalesDashboard: React.FC = () => {
  const { isOpenMenuLayout, toggleOpenMenuLayout } = useMenuLayout()

  return (
    <div className="flex h-screen">
      <AdminAside />
      <div className="flex-1">
        <AdminHeader />
        <div className="flex h-[90%]">
          <div className="hidden lg:block">
            <AdminSalesNavigation />
          </div>
          <SalesDashboardContent />
        </div>
      </div>
      <div className="lg:hidden">
        <Drawer
          title="G&G Landscaping"
          placement="left"
          onClose={() => toggleOpenMenuLayout(false)}
          open={isOpenMenuLayout}
          className="!bg-[#E1EBEB]"
        >
          <AdminSalesNavigation width={"100%"} />
        </Drawer>
      </div>
    </div>
  )
}

export default AdminSalesDashboard
