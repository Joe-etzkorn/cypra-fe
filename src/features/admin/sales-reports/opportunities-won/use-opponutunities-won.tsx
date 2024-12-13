import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "@services/dashboard.service";
import {
  OpportunitiesWonData,
  OpportunitiesWonTableData,
} from "../../../../types/oppotunity-won";
import { currencyFormat } from "@utils/common";
import { REQUEST_URL } from "@constants/req-route";

export const useOpportunitiesWon = () => {
  const { data, isLoading } = useQuery({
    queryKey: [REQUEST_URL.OPPORTUNITIES_WON],
    queryFn: DashboardService.getOpportunitiesWon,
  });
  const { data: tableData, isLoading: tableLoading } = useQuery({
    queryKey: [REQUEST_URL.OPPORTUNITIES_WON_TABLE],
    queryFn: DashboardService.getOpportunitiesWonTable,
  });

  const opportunitiesWonData = data?.data as OpportunitiesWonData;
  const opportunitiesWonTableData =
    tableData?.data as OpportunitiesWonTableData;

  const dataSources: any = opportunitiesWonTableData?.table?.map((item) => ({
    key: item.key,
    salesRepresentative: item.salesRepresentative,
    estimatedRevenue: currencyFormat(item.estimatedRevenue?.toFixed(2)),
    estimatedHours: item.estimatedHours,
    estimatedCosts: currencyFormat(item.estimatedCosts?.toFixed(2)),
    estimatedGrossProfit: currencyFormat(item.estimatedGrossProfit?.toFixed(2)),
    estimatedGrossMargin: item.estimatedGrossMargin,
    children: item?.children?.map((child) => ({
      key: child.key,
      salesRepresentative: child.salesRepresentative,
      estimatedRevenue: currencyFormat(child.estimatedRevenue?.toFixed(2)),
      estimatedHours: child.estimatedHours,
      estimatedCosts: currencyFormat(child.estimatedCosts?.toFixed(2)),
      estimatedGrossProfit: currencyFormat(
        child.estimatedGrossProfit?.toFixed(2),
      ),
      estimatedGrossMargin: child.estimatedGrossMargin,
    })),
  }));

  return {
    opportunitiesWonData,
    dataSources,
    isLoading,
    tableLoading,
  };
};
