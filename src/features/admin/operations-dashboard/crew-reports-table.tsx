import { ColumnsType } from "antd/es/table";
import { CrewReportTableData } from "../../../types/operations-dashboard";

const CrewReportsColumns: ColumnsType<CrewReportTableData> = [
  {
    title: "Crew Leader",
    width: 200,
    dataIndex: "crewLeaderContactName",
    key: "crewLeaderContactName",
  },
  {
    title: "Earned Revenue",
    width: 150,
    dataIndex: "earnedRevenue",
    key: "earnedRevenue",
  },
  {
    title: "Labor Efficiency",
    width: 150,
    dataIndex: "laborEfficiency",
    key: "laborEfficiency",
  },
  {
    title: "Est. GM%",
    width: 150,
    dataIndex: "estimatedGMPercent",
    key: "estimatedGMPercent",
  },
  {
    title: "Act. GM%",
    width: 150,
    dataIndex: "actualGMPercent",
    key: "actualGMPercent",
  },
];

export { CrewReportsColumns };
