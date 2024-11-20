import AdminAside from "@layout/admin/aside"
import AdminHeader from "@layout/admin/header"
import AdminOperationsNavigation from "@layout/admin/operations-navigation"
import CrewLeaderContent from "@features/admin/operations-reports/crew-leader/crew-leader-content"
import { useMenuLayout } from "../../../../stores/menu-layout"
import { Drawer } from "antd"

const AdminReportCrewLeader: React.FC = () => {
  const { isOpenMenuLayout, toggleOpenMenuLayout } = useMenuLayout()

  return (
    <div className="flex h-screen">
      <AdminAside />
      <div className="flex-1">
        <AdminHeader />
        <div className="flex h-[90%]">
          <div className="hidden lg:block">
            <AdminOperationsNavigation />
          </div>
          <CrewLeaderContent />
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
          <AdminOperationsNavigation width={"100%"} />
        </Drawer>
      </div>
    </div>
  )
}

export default AdminReportCrewLeader
