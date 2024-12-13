import { CrewLeaderTableData } from "../../../../types/crew-leader";
import { ColumnsType } from "antd/es/table";

export interface CrewLeaderDataType {
  key: number;
  crewLeader: string;
  estimatedRevenue: string;
  estimatedHours: string;
  hours: number;
  laborVariance: string;
  grossProfit: string;
  estimatedGrossMargin: string;
  grossMargin: string;
  percentVariance: string;
  children?: CrewLeaderDataType[];
}

const CrewLeaderColumns: ColumnsType<CrewLeaderTableData> = [
  {
    title: "Crew Leader",
    dataIndex: "crewLeader",
    key: "crewLeader",
    width: 300,
  },
  {
    title: "Estimated Revenue",
    dataIndex: "earnedRevenue",
    key: "earnedRevenue",
    width: 200,
  },
  {
    title: "Est. Hours",
    dataIndex: "estimatedHours",
    key: "estimatedHours",
    width: 200,
  },
  {
    title: "Hours",
    dataIndex: "hours",
    key: "hours",
    width: 200,
  },
  {
    title: "Labor Variance",
    dataIndex: "laborVariance",
    key: "laborVariance",
    width: 200,
  },
  {
    title: "Gross Profit Var.",
    dataIndex: "grossProfit",
    key: "grossProfit",
    width: 200,
  },
  {
    title: "Est. Gross Margin",
    dataIndex: "estimatedGrossMargin",
    key: "estimatedGrossMargin",
    width: 200,
  },
  {
    title: "Gross Margin",
    dataIndex: "grossMargin",
    key: "grossMargin",
    width: 200,
  },
  {
    title: "% Variance",
    dataIndex: "percentVariance",
    key: "percentVariance",
    width: 200,
  },
];

export { CrewLeaderColumns };
