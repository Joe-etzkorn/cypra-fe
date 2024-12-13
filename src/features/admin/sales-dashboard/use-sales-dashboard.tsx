import { REQUEST_URL } from "@constants/req-route";
import { DashboardService } from "@services/dashboard.service";
import { useQuery } from "@tanstack/react-query";
import { SalesDashboardData } from "../../../types/sales-dashboard";
import { currencyFormat } from "@utils/common";
import { useState } from "react";
import { useDebounce } from "@hooks/useDebounce";

export const useSalesDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: [REQUEST_URL.SALES_DASHBOARD],
    queryFn: DashboardService.getSalesDashboard,
  });

  const [dataIndex, setDataIndex] = useState<number>(0);
  const debouncedDataIndex = useDebounce(300, setDataIndex);

  const salesDashboardData = data?.data as SalesDashboardData;
  const sales = salesDashboardData?.sales;
  const proposals = salesDashboardData?.proposals;
  const closeRate = salesDashboardData?.closeRate;
  const salesWonChart = salesDashboardData?.salesWonChart;
  const salesMixChart = salesDashboardData?.salesMixChart;
  const estimatedGrossMargin = salesDashboardData?.estimatedGrossMarin;
  const leaderBoardSource = (salesDashboardData?.leaderboardTable || [])
    .sort(
      (a, b) =>
        parseFloat(b?.salesWon.replace(/[^0-9.-]+/g, "")) -
        parseFloat(a?.salesWon.replace(/[^0-9.-]+/g, "")),
    )
    .map((item) => ({
      ...item,
      salesWon: `$${currencyFormat(parseFloat(item.salesWon).toFixed(2))}`,
      closeRate: `${parseFloat(item.closeRate).toFixed(2)}%`,
    }));

  const pipelineSource = (salesDashboardData?.pipelineTable || [])
    .sort(
      (a, b) =>
        parseFloat(b?.estimateCost.replace(/[^0-9.-]+/g, "")) -
        parseFloat(a?.estimateCost.replace(/[^0-9.-]+/g, "")),
    )
    .map((item) => ({
      ...item,
      estimateCost: `$${currencyFormat(
        parseFloat(item?.estimateCost).toFixed(2),
      )}`,
      estimatedHours: parseFloat(item?.estimatedHours.toString()).toFixed(2),
    }));
  const doughnutData = {
    labels:
      salesDashboardData?.salesMixChart.salesMix.map(
        (item) => item.divisionName,
      ) || [],
    datasets: [
      {
        data:
          salesDashboardData?.salesMixChart.salesMix.map((item) =>
            currencyFormat(item.salesMixPercentage?.toFixed(2)),
          ) || [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF99CC",
        ],
      },
    ],
  };
  const salesWonData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [6, 9, 12, 13, 5, 6, 5, 5, 6, 9, 12, 13],
        backgroundColor: ["#57B2C4"],
        hoverOffset: 10,
      },
    ],
  };
  const salesWonOptions: any = {
    indexAxis: "x" as const,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        grid: {
          display: true,
          drawOnChartArea: true,
          drawBorder: false,
          color: "#ccc",
          lineWidth: 1,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          generateLabels: () => {
            return [];
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            debouncedDataIndex(context.dataIndex);
            return `Value: ${context.raw}`;
          },
        },
      },
    },
  };
  const doughnutOptions: any = {
    responsive: true,
    cutout: "70%",
    plugins: {
      tooltip: {
        backgroundColor: "rgba(25, 33, 61, 1)",
        position: "average",
        yAlign: "bottom",
        padding: 16,
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  };

  return {
    sales,
    proposals,
    closeRate,
    salesWonChart,
    salesMixChart,
    estimatedGrossMargin,
    leaderBoardSource,
    pipelineSource,
    doughnutData,
    salesWonData,
    salesWonOptions,
    doughnutOptions,
    dataIndex,
    loading: isLoading,
  };
};
