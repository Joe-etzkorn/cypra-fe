import { DashboardService } from "@services/dashboard.service";

import { useQuery } from "@tanstack/react-query";
import {
  OperationsDashboardData,
  CrewReportTableResponse,
  TopServicesTableResponse,
} from "../../../types/operations-dashboard";
import { useDebounce } from "@hooks/useDebounce";
import { useState } from "react";
import { currencyFormat } from "@utils/common";
import { REQUEST_URL } from "@constants/req-route";
import { useOperationDashboardPagination } from "@stores/operation-dashboard-pagination";

export const useOperationsDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: [REQUEST_URL.OPERATIONS_DASHBOARD],
    queryFn: DashboardService.getOperationsDashboard,
  });

  const { topServicesPage, crewReportPage } = useOperationDashboardPagination();

  const { data: crewReportData, isLoading: crewReportTableLoading } = useQuery({
    queryKey: [REQUEST_URL.CREW_REPORT_TABLE, crewReportPage],
    queryFn: () =>
      DashboardService.getCrewReportTable({
        page: crewReportPage,
        limit: 10,
      }),
  });

  const { data: topServicesData, isLoading: topServicesTableLoading } =
    useQuery({
      queryKey: [REQUEST_URL.TOP_SERVICES_TABLE, topServicesPage],
      queryFn: () =>
        DashboardService.getTopServicesTable({
          page: topServicesPage,
          limit: 10,
        }),
    });

  const [dataIndex, setDataIndex] = useState<number>(0);
  const debouncedDataIndex = useDebounce(300, setDataIndex);

  const operationsDashboardData = data?.data as OperationsDashboardData;
  const crewReportTableData = crewReportData?.data as CrewReportTableResponse;

  const topServicesTableData =
    topServicesData?.data as TopServicesTableResponse;

  const crewReportTableSources: any = crewReportTableData?.table?.map(
    (item) => ({
      key: item?.companyId,
      crewLeaderContactName: item?.crewLeaderContactName,
      earnedRevenue: currencyFormat(item?.earnedRevenue?.toFixed(2) || 0),
      laborEfficiency: currencyFormat(item?.laborEfficiency?.toFixed(2) || 0),
      estimatedGMPercent: currencyFormat(
        item?.estimatedGMPercent?.toFixed(2) || 0,
      ),
      actualGMPercent: currencyFormat(item?.actualGMPercent?.toFixed(2) || 0),
    }),
  );
  const topServicesTableSources: any = topServicesTableData?.table?.map(
    (item) => ({
      key: item?.companyId,
      serviceName: item?.serviceName,
      earnedRevenue: currencyFormat(item?.earnedRevenue?.toFixed(2) || 0),
      grossProfit: currencyFormat(item?.grossProfit?.toFixed(2) || 0),
      laborEfficiency: currencyFormat(item?.laborEfficiency?.toFixed(2) || 0),
      estimatedGMPercent: currencyFormat(
        item?.estimatedGMPercent?.toFixed(2) || 0,
      ),
      actualGMPercent: currencyFormat(item?.actualGMPercent?.toFixed(2) || 0),
    }),
  );

  const monthLabels = [
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
  ];

  const salesWonData = {
    labels: monthLabels,
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

  return {
    isLoading,
    operationsDashboardData,
    crewReportTableLoading,
    topServicesTableLoading,
    crewReportTableSources,
    topServicesTableSources,
    salesWonData,
    salesWonOptions,
    dataIndex,
    crewReportTableData,
    topServicesTableData,
  };
};
