import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminSalesNavigation from "@layout/admin/sales-navigation";
import SalesDashboardContent from "@features/admin/sales-dashboard/sales-dashboard-content";

const AdminSalesDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminSalesNavigation />
          <SalesDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default AdminSalesDashboard;
