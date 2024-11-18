import AdminAside from "@layout/admin/aside";
import AdminHeader from "@layout/admin/header";
import AdminSalesNavigation from "@layout/admin/sales-navigation";
import SalesPipelineContent from "@features/admin/sales-reports/sales-pipeline/sales-pipeline-content";

const AdminReportsSalesPipeline: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminAside />
      <div>
        <AdminHeader />
        <div className="flex h-[90%]">
          <AdminSalesNavigation />
          <SalesPipelineContent />
        </div>
      </div>
    </div>
  );
};

export default AdminReportsSalesPipeline;
