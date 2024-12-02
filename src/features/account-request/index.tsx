import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AccountRequestContent from "./account-request-content";
import SuperAdminNavigation from "@layout/super-admin/navigation";
import { Drawer } from "antd";
import { useMenuLayout } from "../../stores/menu-layout";
import "./index.css";

const AccountRequest: React.FC = () => {
  const { isOpenMenuLayout, toggleOpenMenuLayout } = useMenuLayout()

  return (
    <div className="flex h-screen">
      <AdminAside />
      <div className="flex-1">
        <AdminHeader />
        <div className="flex h-[90%]">
          <div className="hidden lg:block">
            <SuperAdminNavigation />
          </div>
          <AccountRequestContent />
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
          <SuperAdminNavigation width={"100%"} />
        </Drawer>
      </div>
    </div>
  );
};

export default AccountRequest;
