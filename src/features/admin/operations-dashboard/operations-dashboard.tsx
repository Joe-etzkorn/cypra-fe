import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import OperationsDashboardContent from "@features/admin/operations-dashboard/operations-dashboard-content";
import AdminOperationsNavigation from "@layout/admin/operations-navigation";

const AdminOperationsDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminOperationsNavigation />
          <OperationsDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default AdminOperationsDashboard;
