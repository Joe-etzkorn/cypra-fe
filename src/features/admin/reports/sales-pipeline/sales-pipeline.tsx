import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminNavigation from "@layout/admin/nagivation";
import SalesPipelineContent from "@features/admin/reports/sales-pipeline/sales-pipeline-content";

const AdminReportsSalesPipeline: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminNavigation />
          <SalesPipelineContent />
        </div>
      </div>
    </div>
  );
};

export default AdminReportsSalesPipeline;
