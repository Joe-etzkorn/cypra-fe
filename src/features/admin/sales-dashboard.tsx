import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminNavigation from "@layout/admin/nagivation";

const AdminSalesDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <AdminHeader />
      <AdminNavigation />
    </div>
  );
};

export default AdminSalesDashboard;
