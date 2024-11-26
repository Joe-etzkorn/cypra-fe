import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";

const AccountRequest: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div className="flex-1">
        <AdminHeader />
        <div>Account Request</div>
      </div>
      {/* <div className="lg:hidden">
        <Drawer
          title="G&G Landscaping"
          placement="left"
          onClose={() => toggleOpenMenuLayout(false)}
          open={isOpenMenuLayout}
          className="!bg-[#E1EBEB]"
        >
          <AdminSalesNavigation width={"100%"} />
        </Drawer>
      </div> */}
    </div>
  );
};

export default AccountRequest;
