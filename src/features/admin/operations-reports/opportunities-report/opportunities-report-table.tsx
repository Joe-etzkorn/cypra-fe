import { ColumnsType } from "antd/es/table";
export interface OpportunitiesReportDataType {
  key: number;
  propertyName: string;
  estimatedRevenue: string;
  estimatedHours: string;
  estimatedCosts: string;
  estimatedGrossProfit: string;
  estimatedGrossMargin: string;
  children?: OpportunitiesReportDataType[];
}

const OpportunitiesReportSources: OpportunitiesReportDataType[] = [
  {
    key: 1,
    propertyName: "Willems Residence",
    estimatedRevenue: "$101,324",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
    children: [
      {
        key: 2,
        propertyName: "Front Lawn Install A",
        estimatedRevenue: "$24,892",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
      },
      {
        key: 3,
        propertyName: "Pool Deck",
        estimatedRevenue: "$76,432",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
      },
    ],
  },
];

const OpportunitiesReportColumns: ColumnsType<OpportunitiesReportDataType> = [
  { title: "Property Name", dataIndex: "propertyName", key: "propertyName" },
  {
    title: "Estimated Revenue",
    dataIndex: "estimatedRevenue",
    key: "estimatedRevenue",
  },
  {
    title: "Estimated Hours",
    dataIndex: "estimatedHours",
    key: "estimatedHours",
  },
  {
    title: "Estimated Costs",
    dataIndex: "estimatedCosts",
    key: "estimatedCosts",
  },
  {
    title: "Estimated Gross Profit",
    dataIndex: "estimatedGrossProfit",
    key: "estimatedGrossProfit",
  },
  {
    title: "Estimated Gross Margin",
    dataIndex: "estimatedGrossMargin",
    key: "estimatedGrossMargin",
  },
];
export { OpportunitiesReportSources, OpportunitiesReportColumns };
