import { ColumnsType } from "antd/es/table";
export interface OpportunitiesReportDataType {
  key: number;
  propertyName: string;
  actualRevenue: string;
  actualHours: string;
  actualCosts: string;
  actualGrossProfit: string;
  actualGrossMargin: string;
  children?: OpportunitiesReportDataType[];
}

const OpportunitiesReportColumns: ColumnsType<OpportunitiesReportDataType> = [
  { title: "Property Name", dataIndex: "propertyName", key: "propertyName" },
  {
    title: "Estimated Revenue",
    dataIndex: "actualRevenue",
    key: "actualRevenue",
  },
  {
    title: "Estimated Hours",
    dataIndex: "actualHours",
    key: "actualHours",
  },
  {
    title: "Estimated Costs",
    dataIndex: "actualCosts",
    key: "actualCosts",
  },
  {
    title: "Estimated Gross Profit",
    dataIndex: "actualGrossProfit",
    key: "actualGrossProfit",
  },
  {
    title: "Estimated Gross Margin",
    dataIndex: "actualGrossMargin",
    key: "actualGrossMargin",
  },
];
export { OpportunitiesReportColumns };
