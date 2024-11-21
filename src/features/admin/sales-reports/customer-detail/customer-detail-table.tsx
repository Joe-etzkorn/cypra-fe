import { ColumnsType } from "antd/es/table";

export interface CustomerDetailDataType {
  key: number;
  revenue: string;
  hoursEstimated: string;
  hoursActual: string;
  totalCostsEstimated: string;
  totalCostsActual: string;
  warrantyLabor: string;
}

const CustomerDetailSources: CustomerDetailDataType[] = [
  {
    key: 1,
    revenue: "$1,082,423.44",
    hoursEstimated: "4,028.27",
    hoursActual: "5,715.48",
    totalCostsEstimated: "$584,851.07",
    totalCostsActual: "$641,736.76",
    warrantyLabor: "628",
  },
  {
    key: 2,
    revenue: "$5,808.00",
    hoursEstimated: "92.00",
    hoursActual: "156.79",
    totalCostsEstimated: "$3,059.85",
    totalCostsActual: "$5,045.65",
    warrantyLabor: "12",
  },
  {
    key: 3,
    revenue: "$7,200.00",
    hoursEstimated: "24.00",
    hoursActual: "110.75",
    totalCostsEstimated: "$1,080.24",
    totalCostsActual: "$5,860.60",
    warrantyLabor: "57",
  },
  {
    key: 4,
    revenue: "$0.00",
    hoursEstimated: "11",
    hoursActual: "32.98",
    totalCostsEstimated: "$450.00",
    totalCostsActual: "$1,718.03",
    warrantyLabor: "0",
  },
];

const CustomerDetailColumns: ColumnsType<CustomerDetailDataType> = [
  {
    title: "Revenue",
    dataIndex: "revenue",
    key: "revenue",
  },
  {
    title: "Hours Estimated",
    dataIndex: "hoursEstimated",
    key: "hoursEstimated",
  },
  {
    title: "Hours Actual",
    dataIndex: "hoursActual",
    key: "hoursActual",
  },
  {
    title: "Total Costs Estimated",
    dataIndex: "totalCostsEstimated",
    key: "totalCostsEstimated",
  },
  {
    title: "Total Costs Actual",
    dataIndex: "totalCostsActual",
    key: "totalCostsActual",
  },
  {
    title: "Warranty Labor",
    dataIndex: "warrantyLabor",
    key: "warrantyLabor",
  },
];

export { CustomerDetailSources, CustomerDetailColumns };
