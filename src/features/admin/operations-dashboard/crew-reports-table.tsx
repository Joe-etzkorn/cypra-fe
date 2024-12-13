import { ColumnsType } from "antd/es/table";
import { CrewReportTableData } from "../../../types/operations-dashboard";

const CrewReportsColumns: ColumnsType<CrewReportTableData> = [
  {
    title: "Crew Leader",
    width: 150,
    dataIndex: "crewLeaderContactName",
    key: "crewLeaderContactName",
  },
  { title: "Earned Revenue", dataIndex: "earnedRevenue", key: "earnedRevenue" },
  {
    title: "Labor Efficiency",
    dataIndex: "laborEfficiency",
    key: "laborEfficiency",
  },
  {
    title: "Est. GM%",
    dataIndex: "estimatedGMPercent",
    key: "estimatedGMPercent",
  },
  { title: "Act. GM%", dataIndex: "actualGMPercent", key: "actualGMPercent" },
];

export { CrewReportsColumns };
