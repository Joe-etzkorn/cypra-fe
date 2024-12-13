import { ColumnsType } from "antd/es/table";
import { TopServicesTableData } from "../../../types/operations-dashboard";

const TopServicesColumns: ColumnsType<TopServicesTableData> = [
  { title: "Service", dataIndex: "serviceName", key: "serviceName" },
  { title: "Earned Revenue", dataIndex: "earnedRevenue", key: "earnedRevenue" },
  {
    title: "Est. GM",
    dataIndex: "estimatedGMPercent",
    key: "estimatedGMPercent",
  },
  { title: "Act. GM", dataIndex: "actualGMPercent", key: "actualGMPercent" },
  { title: "Labor Eff.", dataIndex: "laborEfficiency", key: "laborEfficiency" },
];

export { TopServicesColumns };
