import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminNavigation from "@layout/admin/nagivation";
import SalesDashboardContent from "@features/admin/sales-dashboard/sales-dashboard-content";

const AdminSalesDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminNavigation />
          <SalesDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default AdminSalesDashboard;
