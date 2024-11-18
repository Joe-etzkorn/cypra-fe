import { ColumnsType } from "antd/es/table";
export interface CrewReportDataType {
  key: number;
  crewLeader: string;
  earnedRevenue: string;
  laborEfficiency: string;
  estimatedGMPercent: string;
  actualGMPercent: string;
}

const CrewReportsSources: CrewReportDataType[] = [
  {
    key: 1,
    crewLeader: "Jeremy Flinkle",
    earnedRevenue: "$1,200,000",
    laborEfficiency: "100%",
    estimatedGMPercent: "43",
    actualGMPercent: "70%",
  },
  {
    key: 2,
    crewLeader: "Sasha Smith",
    earnedRevenue: "$988,000",
    laborEfficiency: "95%",
    estimatedGMPercent: "24",
    actualGMPercent: "73%",
  },
  {
    key: 3,
    crewLeader: "Rebecca Nyugen",
    earnedRevenue: "$765,300",
    laborEfficiency: "65%",
    estimatedGMPercent: "47",
    actualGMPercent: "80%",
  },
  {
    key: 4,
    crewLeader: "Matt Weiss",
    earnedRevenue: "$703,000",
    laborEfficiency: "120%",
    estimatedGMPercent: "48",
    actualGMPercent: "54%",
  },
  {
    key: 5,
    crewLeader: "Frank Frankel",
    earnedRevenue: "$522,000",
    laborEfficiency: "150%",
    estimatedGMPercent: "30",
    actualGMPercent: "49%",
  },
];

const CrewReportsColumns: ColumnsType<CrewReportDataType> = [
  { title: "Crew Leader", dataIndex: "crewLeader", key: "crewLeader" },
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

export { CrewReportsSources, CrewReportsColumns };
