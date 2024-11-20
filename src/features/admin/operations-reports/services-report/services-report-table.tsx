import { ColumnsType } from "antd/es/table";
export interface ServicesReportDataType {
  key: number;
  serviceName: string;
  earnedRevenue: string;
  estimatedHours: string;
  hours: number;
  laborVariance: string;
  grossProfit: string;
  estimatedGrossMargin: string;
  grossMargin: string;
  percentVariance: string;
  children?: ServicesReportDataType[];
}

const ServicesReportSources: ServicesReportDataType[] = [
  {
    key: 1,
    serviceName: "Mowing",
    earnedRevenue: "$635,034",
    estimatedHours: "325",
    hours: 313,
    laborVariance: "103.8%",
    grossProfit: "$635,034",
    estimatedGrossMargin: "32%",
    grossMargin: "31.4%",
    percentVariance: "102.4%",
  },
  {
    key: 2,
    serviceName: "Planting",
    earnedRevenue: "$635,034",
    estimatedHours: "325",
    hours: 313,
    laborVariance: "103.8%",
    grossProfit: "$635,034",
    estimatedGrossMargin: "32%",
    grossMargin: "31.4%",
    percentVariance: "102.4%",
  },
  {
    key: 3,
    serviceName: "Patio Install",
    earnedRevenue: "$635,034",
    estimatedHours: "325",
    hours: 313,
    laborVariance: "103.8%",
    grossProfit: "$635,034",
    estimatedGrossMargin: "32%",
    grossMargin: "31.4%",
    percentVariance: "102.4%",
  },
  {
    key: 4,
    serviceName: "Mulching",
    earnedRevenue: "$635,034",
    estimatedHours: "325",
    hours: 313,
    laborVariance: "103.8%",
    grossProfit: "$635,034",
    estimatedGrossMargin: "32%",
    grossMargin: "31.4%",
    percentVariance: "102.4%",
    children: [
      {
        key: 5,
        serviceName: "Malachi Residence",
        earnedRevenue: "$635,034",
        estimatedHours: "325",
        hours: 313,
        laborVariance: "103.8%",
        grossProfit: "$635,034",
        estimatedGrossMargin: "32%",
        grossMargin: "31.4%",
        percentVariance: "102.4%",
      },
    ],
  },
];

const ServicesReportColumns: ColumnsType<ServicesReportDataType> = [
  { title: "Service Name", dataIndex: "serviceName", key: "serviceName" },
  { title: "Earned Revenue", dataIndex: "earnedRevenue", key: "earnedRevenue" },
  { title: "Est. Hours", dataIndex: "estimatedHours", key: "estimatedHours" },
  { title: "Hours", dataIndex: "hours", key: "hours" },
  { title: "Labor Variance", dataIndex: "laborVariance", key: "laborVariance" },
  { title: "Gross Profit Var.", dataIndex: "grossProfit", key: "grossProfit" },
  {
    title: "Est. Gross Margin",
    dataIndex: "estimatedGrossMargin",
    key: "estimatedGrossMargin",
  },
  { title: "Gross Margin", dataIndex: "grossMargin", key: "grossMargin" },
  { title: "% Variance", dataIndex: "percentVariance", key: "percentVariance" },
];
export { ServicesReportSources, ServicesReportColumns };
