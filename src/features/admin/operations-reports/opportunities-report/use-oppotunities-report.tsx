import { useQuery } from "@tanstack/react-query";

import { DashboardService } from "@services/dashboard.service";
import {
  OpportunitiesReport,
  OpportunitiesReportTable,
} from "../../../../types/oppotunities-report";
import { currencyFormat } from "@utils/common";
import { REQUEST_URL } from "@constants/req-route";

export const useOpportunitiesReport = () => {
  const { data: opportunitiesReport, isLoading: opportunitiesReportLoading } =
    useQuery({
      queryKey: [REQUEST_URL.COMPLETED_OPPORTUNITIES],
      queryFn: DashboardService.getCompletedOpportunities,
    });

  const {
    data: opportunitiesReportTable,
    isLoading: opportunitiesReportTableLoading,
  } = useQuery({
    queryKey: [REQUEST_URL.COMPLETED_OPPORTUNITIES_TABLE],
    queryFn: DashboardService.getCompletedOpportunitiesTable,
  });
  const opportunitiesReportTableData = opportunitiesReportTable?.data
    ?.table as OpportunitiesReportTable[];
  const opportunitiesReportData =
    (opportunitiesReport?.data as OpportunitiesReport) || {};

  const dataSources: any = opportunitiesReportTableData?.map((item) => ({
    key: item?.key,
    propertyName: item?.propertyName,
    actualRevenue: currencyFormat(item?.actualRevenue?.toFixed(2) || 0),
    actualHours: item?.actualHours,
    actualCosts: currencyFormat(item?.actualCosts?.toFixed(2) || 0),
    actualGrossProfit: currencyFormat(item?.actualGrossProfit?.toFixed(2) || 0),
    actualGrossMargin: item?.actualGrossMargin,
    children: item?.children?.map((child) => ({
      key: child?.key,
      propertyName: child?.propertyName,
      actualRevenue: currencyFormat(child?.actualRevenue?.toFixed(2) || 0),
      actualHours: child?.actualHours,
      actualCosts: currencyFormat(child?.actualCosts?.toFixed(2) || 0),
      actualGrossProfit: currencyFormat(
        child?.actualGrossProfit?.toFixed(2) || 0,
      ),
      actualGrossMargin: child?.actualGrossMargin,
    })),
  }));

  return {
    opportunitiesReportData,
    opportunitiesReportLoading,
    dataSources,
    opportunitiesReportTableLoading,
  };
};
