import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminSalesNavigation from "@layout/admin/sales-navigation";
import OpportunitiesWonContent from "@features/admin/sales-reports/opportunities-won/opportunities-won-content";

const AdminOpportunitiesWon: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminSalesNavigation />
          <OpportunitiesWonContent />
        </div>
      </div>
    </div>
  );
};

export default AdminOpportunitiesWon;
