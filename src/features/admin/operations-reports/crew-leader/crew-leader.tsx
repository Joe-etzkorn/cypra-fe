import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminOperationsNavigation from "@layout/admin/operations-navigation";
import CrewLeaderContent from "@features/admin/operations-reports/crew-leader/crew-leader-content";

const AdminReportCrewLeader: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminOperationsNavigation />
          <CrewLeaderContent />
        </div>
      </div>
    </div>
  );
};

export default AdminReportCrewLeader;
