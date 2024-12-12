import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "@services/dashboard.service";
import {
  BiddingDeliveryTableData,
  OpportunityItem,
  ReportPipelineData,
  TableType,
  WonLostData,
  WonLostItem,
} from "../../../../types/report-pipeline";
import { currencyFormat, dayFormat } from "@utils/common";
import { REQUEST_URL } from "@constants/req-route";
import { ColumnsType } from "antd/es/table";
import { Space } from "antd";
import { useSalesPipelinePagination } from "@stores/use-sales-pipeline-pagination";

export const useSalesPipeline = () => {
  const { biddingPage, deliveredPage, opportunitiesPage } =
    useSalesPipelinePagination();
  const { data, isLoading } = useQuery({
    queryKey: [REQUEST_URL.REPORT_PIPELINE_DATA],
    queryFn: () => DashboardService.getReportPipelineData(),
  });
  const { data: biddingTable, isLoading: biddingTableLoading } = useQuery({
    queryKey: [
      REQUEST_URL.BIDDING_DELIVERY_TABLE,
      TableType.BIDDING,
      biddingPage,
    ],
    queryFn: () =>
      DashboardService.getBiddingDeliveryTable({
        page: biddingPage,
        limit: 10,
        type: TableType.BIDDING,
      }),
  });

  const { data: deliveredTable, isLoading: deliveredTableLoading } = useQuery({
    queryKey: [
      REQUEST_URL.BIDDING_DELIVERY_TABLE,
      TableType.DELIVERED,
      deliveredPage,
    ],
    queryFn: () =>
      DashboardService.getBiddingDeliveryTable({
        page: deliveredPage,
        limit: 10,
        type: TableType.DELIVERED,
      }),
  });
  const { data: wonLost, isLoading: wonLostLoading } = useQuery({
    queryKey: [REQUEST_URL.WON_LOST, opportunitiesPage],
    queryFn: () =>
      DashboardService.getWonLost({ page: opportunitiesPage, limit: 10 }),
  });

  const pipelineData = data?.data as ReportPipelineData;
  const biddingTableData = biddingTable?.data as BiddingDeliveryTableData;
  const deliveredTableData = deliveredTable?.data as BiddingDeliveryTableData;
  const wonLostData = wonLost?.data as WonLostData;

  const formattedBiddingSource =
    biddingTableData?.table?.map((item) => ({
      ...item,
      estProfit: `$${currencyFormat(item.estProfit.toFixed(2))}`,
    })) || [];

  const formattedDeliveredSource =
    deliveredTableData?.table?.map((item) => ({
      ...item,
      estProfit: `$${currencyFormat(item.estProfit.toFixed(2))}`,
    })) || [];

  const formattedWonLostSource =
    wonLostData?.table?.map((item) => ({
      ...item,
      estProfit: `$${currencyFormat(item.estProfit.toFixed(2))}`,
    })) || [];

  const doughnutData = {
    labels: ["Won", "Lost"],
    datasets: [
      {
        data: [
          wonLostData?.chart[0]?.toFixed(2) || 0,
          wonLostData?.chart[1]?.toFixed(2) || 0,
        ],
        backgroundColor: ["#59C9A5", "#EF6F6C"],
      },
    ],
  };

  const biddingColumns: ColumnsType<OpportunityItem> = [
    { title: "Property", dataIndex: "property", key: "property" },
    { title: "Division", dataIndex: "division", key: "division" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Est. Hrs.", dataIndex: "estHrs", key: "estHrs" },
    { title: "Est. Profit", dataIndex: "estProfit", key: "estProfit" },
    {
      title: "",
      key: "action",
      render: () => (
        <Space size="middle">
          <a className="text-[#57B2C4]">Copy id</a>
        </Space>
      ),
    },
  ];

  const deliveredColumns: ColumnsType<OpportunityItem> = [
    {
      title: "Age",
      dataIndex: "age",
      width: 80,
      key: "age",
      render: (age: string) => (
        <span className={age === "3D" ? "text-red-500" : ""}>{age}</span>
      ),
    },
    { title: "Property", width: 250, dataIndex: "property", key: "property" },
    { title: "Division", width: 150, dataIndex: "division", key: "division" },
    { title: "Name", width: 150, dataIndex: "name", key: "name" },
    { title: "Est. Hrs.", width: 100, dataIndex: "estHrs", key: "estHrs" },
    {
      title: "Est. Profit",
      width: 100,
      dataIndex: "estProfit",
      key: "estProfit",
    },
    {
      title: "",
      width: 100,
      key: "action",
      render: () => (
        <Space size="middle">
          <a className="text-[#57B2C4]">Copy id</a>
        </Space>
      ),
    },
  ];

  const opportunitiesColumns: ColumnsType<WonLostItem> = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span className={status === "Won" ? "text-green-500" : "text-red-500"}>
          {status}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => <span>{dayFormat(date)}</span>,
    },
    { title: "Property", dataIndex: "property", key: "property" },
    { title: "Division", dataIndex: "division", key: "division" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Est. Hours", dataIndex: "estHrs", key: "estHrs" },
    { title: "Est. Profit", dataIndex: "estProfit", key: "estProfit" },
  ];

  const biddingTotal = biddingTableData?.total || 0;
  const deliveredTotal = deliveredTableData?.total || 0;
  const opportunitiesTotal = wonLostData?.total || 0;

  return {
    pendingOpportunities: pipelineData?.common?.count,
    pendingEstimatedDollars: pipelineData?.common?.total,
    biddingCount: pipelineData?.bidding?.count,
    deliveredCount: pipelineData?.delivered?.count,
    mostActiveDivision: pipelineData?.mostDivision,
    averageSalesCycle: pipelineData?.averageSalesCycle,
    biddingSource: formattedBiddingSource,
    deliveredSource: formattedDeliveredSource,
    wonLostSource: formattedWonLostSource,
    doughnutData,
    isLoading,
    biddingTableLoading,
    deliveredTableLoading,
    wonLostLoading,
    biddingColumns,
    deliveredColumns,
    opportunitiesColumns,
    biddingTotal,
    deliveredTotal,
    opportunitiesTotal,
  };
};
