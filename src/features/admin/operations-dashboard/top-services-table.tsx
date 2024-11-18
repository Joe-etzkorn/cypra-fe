import { ColumnsType } from "antd/es/table";
export interface TopServicesDataType {
  key: number;
  service: string;
  earnedRevenue: string;
  estGM: string;
  actualGM: string;
  laborEfficiency: string;
}

const TopServicesSources: TopServicesDataType[] = [
  {
    key: 1,
    service: "Planting",
    earnedRevenue: "$1,200,000",
    estGM: "$600,000",
    actualGM: "70%",
    laborEfficiency: "100%",
  },
  {
    key: 2,
    service: "Mulching",
    earnedRevenue: "$988,000",
    estGM: "$500,000",
    actualGM: "73%",
    laborEfficiency: "110%",
  },
  {
    key: 3,
    service: "Patio Install",
    earnedRevenue: "$765,300",
    estGM: "$400,000",
    actualGM: "80%",
    laborEfficiency: "60%",
  },
  {
    key: 4,
    service: "Mowing",
    earnedRevenue: "$703,000",
    estGM: "$300,000",
    actualGM: "54%",
    laborEfficiency: "54%",
  },
  {
    key: 5,
    service: "Pool Deck",
    earnedRevenue: "$522,000",
    estGM: "$200,000",
    actualGM: "49%",
    laborEfficiency: "49%",
  },
];

const TopServicesColumns: ColumnsType<TopServicesDataType> = [
  { title: "Service", dataIndex: "service", key: "service" },
  { title: "Earned Revenue", dataIndex: "earnedRevenue", key: "earnedRevenue" },
  { title: "Est. GM", dataIndex: "estGM", key: "estGM" },
  { title: "Act. GM", dataIndex: "actualGM", key: "actualGM" },
  { title: "Labor Eff.", dataIndex: "laborEfficiency", key: "laborEfficiency" },
];

export { TopServicesSources, TopServicesColumns };
