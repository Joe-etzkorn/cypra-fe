import { ColumnsType } from "antd/es/table";
import { TopServicesTableData } from "../../../types/operations-dashboard";

const TopServicesColumns: ColumnsType<TopServicesTableData> = [
  {
    title: "Service",
    width: 250,
    dataIndex: "serviceName",
    key: "serviceName",
  },
  {
    title: "Earned Revenue",
    width: 150,
    dataIndex: "earnedRevenue",
    key: "earnedRevenue",
  },
  {
    title: "Est. GM",
    width: 150,
    dataIndex: "estimatedGMPercent",
    key: "estimatedGMPercent",
  },
  {
    title: "Act. GM",
    width: 150,
    dataIndex: "actualGMPercent",
    key: "actualGMPercent",
  },
  {
    title: "Labor Eff.",
    width: 150,
    dataIndex: "laborEfficiency",
    key: "laborEfficiency",
  },
];

export { TopServicesColumns };
