import { ColumnsType } from "antd/es/table";

export interface OpportunitiesDataType {
  key: number;
  salesRepresentative: string;
  estimatedRevenue: string;
  estimatedHours: string;
  estimatedCosts: string;
  estimatedGrossProfit: string;
  estimatedGrossMargin: string;
  children?: OpportunitiesDataType[];
}

const OpportunitiesSources: OpportunitiesDataType[] = [
  {
    key: 1,
    salesRepresentative: "Andrew Malachi",
    estimatedRevenue: "$635,034",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
    children: [
      {
        key: 2,
        salesRepresentative: "Andrew Malachi 1",
        estimatedRevenue: "$635,034",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
        children: [
          {
            key: 3,
            salesRepresentative: "Andrew Malachi 2",
            estimatedRevenue: "$635,034",
            estimatedHours: "Jeremy Wright",
            estimatedCosts: "Jeremy Wright",
            estimatedGrossProfit: "Jeremy Wright",
            estimatedGrossMargin: "Jeremy Wright",
          },
        ],
      },
    ],
  },
  {
    key: 4,
    salesRepresentative: "Jeremy Wright",
    estimatedRevenue: "$127,112",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
    children: [
      {
        key: 5,
        salesRepresentative: "Jeremy Wright 1",
        estimatedRevenue: "$127,112",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
        children: [
          {
            key: 6,
            salesRepresentative: "Jeremy Wright 2",
            estimatedRevenue: "$127,112",
            estimatedHours: "Jeremy Wright",
            estimatedCosts: "Jeremy Wright",
            estimatedGrossProfit: "Jeremy Wright",
            estimatedGrossMargin: "Jeremy Wright",
          },
        ],
      },
    ],
  },
  {
    key: 7,
    salesRepresentative: "Marleen Caileigh",
    estimatedRevenue: "$587,844",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 8,
    salesRepresentative: "Danette Lefty",
    estimatedRevenue: "$66,203",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 9,
    salesRepresentative: "Renee Linnettte",
    estimatedRevenue: "$202,439",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 10,
    salesRepresentative: "Edgar Perlie",
    estimatedRevenue: "$310,329",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
    children: [
      {
        key: 11,
        salesRepresentative: "Thomas Residence",
        estimatedRevenue: "$95,843",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
      },
      {
        key: 12,
        salesRepresentative: "Willems Residence",
        estimatedRevenue: "$101,324",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
        children: [
          {
            key: 13,
            salesRepresentative: "Front Lawn Install A",
            estimatedRevenue: "$24,892",
            estimatedHours: "Jeremy Wright",
            estimatedCosts: "Jeremy Wright",
            estimatedGrossProfit: "Jeremy Wright",
            estimatedGrossMargin: "Jeremy Wright",
          },
          {
            key: 14,
            salesRepresentative: "Pool Deck",
            estimatedRevenue: "$76,432",
            estimatedHours: "Jeremy Wright",
            estimatedCosts: "Jeremy Wright",
            estimatedGrossProfit: "Jeremy Wright",
            estimatedGrossMargin: "Jeremy Wright",
          },
        ],
      },
      {
        key: 15,
        salesRepresentative: "Gershon Residence",
        estimatedRevenue: "$113,162",
        estimatedHours: "Jeremy Wright",
        estimatedCosts: "Jeremy Wright",
        estimatedGrossProfit: "Jeremy Wright",
        estimatedGrossMargin: "Jeremy Wright",
      },
    ],
  },
  {
    key: 16,
    salesRepresentative: "Jackie Zeke",
    estimatedRevenue: "$520,003",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 17,
    salesRepresentative: "Isaiah Jones",
    estimatedRevenue: "$324,321",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 18,
    salesRepresentative: "Santiago Burgess",
    estimatedRevenue: "$94,586",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 19,
    salesRepresentative: "Clifton Perry",
    estimatedRevenue: "$534,453",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
  {
    key: 20,
    salesRepresentative: "Shawna Mann",
    estimatedRevenue: "$734,641",
    estimatedHours: "Jeremy Wright",
    estimatedCosts: "Jeremy Wright",
    estimatedGrossProfit: "Jeremy Wright",
    estimatedGrossMargin: "Jeremy Wright",
  },
];

const OpportunitiesColumns: ColumnsType<OpportunitiesDataType> = [
  { title: "Sales Representative", dataIndex: "salesRepresentative", key: "salesRepresentative", width: 200 },
  { title: "Estimated Revenue", dataIndex: "estimatedRevenue", key: "estimatedRevenue", width: 200 },
  { title: "Estimated Hours", dataIndex: "estimatedHours", key: "estimatedHours", width: 200 },
  { title: "Estimated Costs", dataIndex: "estimatedCosts", key: "estimatedCosts", width: 200 },
  { title: "Estimated Gross Profit", dataIndex: "estimatedGrossProfit", key: "estimatedGrossProfit", width: 200 },
  { title: "Estimated Gross Margin", dataIndex: "estimatedGrossMargin", key: "estimatedGrossMargin", width: 200 },
];

export { OpportunitiesSources, OpportunitiesColumns };
