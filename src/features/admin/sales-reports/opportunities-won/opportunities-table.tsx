import { ColumnsType } from "antd/es/table";
import { OpportunitiesWonTable } from "../../../../types/oppotunity-won";

export interface OpportunitiesDataType extends OpportunitiesWonTable {
  children?: OpportunitiesDataType[];
}

const OpportunitiesColumns: ColumnsType<OpportunitiesDataType> = [
  {
    title: "Sales Representative",
    dataIndex: "salesRepresentative",
    key: "salesRepresentative",
    width: 200,
  },
  {
    title: "Estimated Revenue",
    dataIndex: "estimatedRevenue",
    key: "estimatedRevenue",
    width: 200,
  },
  {
    title: "Estimated Hours",
    dataIndex: "estimatedHours",
    key: "estimatedHours",
    width: 200,
  },
  {
    title: "Estimated Costs",
    dataIndex: "estimatedCosts",
    key: "estimatedCosts",
    width: 200,
  },
  {
    title: "Estimated Gross Profit",
    dataIndex: "estimatedGrossProfit",
    key: "estimatedGrossProfit",
    width: 200,
  },
  {
    title: "Estimated Gross Margin",
    dataIndex: "estimatedGrossMargin",
    key: "estimatedGrossMargin",
    width: 200,
  },
];

export { OpportunitiesColumns };
