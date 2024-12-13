import { REQUEST_URL } from "@constants/req-route";
import { DashboardService } from "@services/dashboard.service";
import { useQuery } from "@tanstack/react-query";
import {
  CrewLeaderReportData,
  CrewLeaderTableData,
  EfficiencyAndRevenueChartData,
  EfficiencyAndWarrantyHoursChartData,
} from "../../../../types/crew-leader";
import { currencyFormat } from "@utils/common";
import { ChartData } from "chart.js";

export const useCrewLeader = () => {
  const { data: crewLeaderReport, isLoading: crewLeaderReportLoading } =
    useQuery({
      queryKey: [REQUEST_URL.CREW_LEADER_REPORT],
      queryFn: DashboardService.getCrewLeaderReport,
    });
  const {
    data: crewLeaderReportTable,
    isLoading: crewLeaderReportTableLoading,
  } = useQuery({
    queryKey: [REQUEST_URL.CREW_LEADER_REPORT_TABLE],
    queryFn: DashboardService.getCrewLeaderReportTable,
  });

  const {
    data: chartEfficiencyWarrantyHours,
    isLoading: chartEfficiencyWarrantyHoursLoading,
  } = useQuery({
    queryKey: [REQUEST_URL.CREW_LEADER_CHART_EFFICIENCY_WARRANTY_HOURS],
    queryFn: DashboardService.getCrewLeaderChartEfficiencyWarrantyHours,
  });

  const {
    data: chartEfficiencyEarnedRevenue,
    isLoading: chartEfficiencyEarnedRevenueLoading,
  } = useQuery({
    queryKey: [REQUEST_URL.CREW_LEADER_CHART_EFFICIENCY_EARNED_REVENUE],
    queryFn: DashboardService.getCrewLeaderChartEfficiencyEarnedRevenue,
  });

  const crewLeaderReportData = crewLeaderReport?.data as CrewLeaderReportData;

  const crewLeaderReportTableData = crewLeaderReportTable?.data
    ?.table as CrewLeaderTableData[];

  const crewLeaderReportTableDataSources: any = crewLeaderReportTableData?.map(
    (item: CrewLeaderTableData) => {
      return {
        key: item?.key,
        crewLeader: item?.crewLeader,
        earnedRevenue: currencyFormat(item?.earnedRevenue?.toFixed(2) || 0),
        estimatedHours: currencyFormat(item?.estimatedHours?.toFixed(2) || 0),
        hours: currencyFormat(item?.hours?.toFixed(2) || 0),
        laborVariance: currencyFormat(item?.laborVariance?.toFixed(2) || 0),
        grossProfit: currencyFormat(item?.grossProfit?.toFixed(2) || 0),
        estimatedGrossMargin: currencyFormat(
          item?.estimatedGrossMargin?.toFixed(2) || 0,
        ),
        grossMargin: currencyFormat(item?.grossMargin?.toFixed(2) || 0),
        percentVariance: currencyFormat(item?.percentVariance?.toFixed(2) || 0),
        children: item?.children?.map((child: CrewLeaderTableData) => {
          return {
            key: child?.key,
            crewLeader: child?.crewLeader,
            earnedRevenue: currencyFormat(
              child?.earnedRevenue?.toFixed(2) || 0,
            ),
            estimatedHours: currencyFormat(
              child?.estimatedHours?.toFixed(2) || 0,
            ),
            hours: currencyFormat(child?.hours?.toFixed(2) || 0),
            laborVariance: currencyFormat(
              child?.laborVariance?.toFixed(2) || 0,
            ),
            grossProfit: currencyFormat(child?.grossProfit?.toFixed(2) || 0),
            estimatedGrossMargin: currencyFormat(
              child?.estimatedGrossMargin?.toFixed(2) || 0,
            ),
            grossMargin: currencyFormat(child?.grossMargin?.toFixed(2) || 0),
            percentVariance: currencyFormat(
              child?.percentVariance?.toFixed(2) || 0,
            ),
          };
        }),
      };
    },
  );

  const filteredData = chartEfficiencyWarrantyHours?.data?.chart?.filter(
    (item: EfficiencyAndWarrantyHoursChartData) =>
      item?.crewLeaderContactName &&
      item?.laborEfficiency > 0 &&
      item?.warrantyHoursAvg > 0,
  );

  const chartEfficiencyWarrantyHoursData: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Crew Leaders",
        data:
          filteredData?.map((item: EfficiencyAndWarrantyHoursChartData) => ({
            x: item?.warrantyHoursAvg,
            y: item?.laborEfficiency,
            label: item?.crewLeaderContactName,
          })) || [],
        backgroundColor: "#57B2C4",
      },
    ],
  };

  const filteredDataEarnedRevenue =
    chartEfficiencyEarnedRevenue?.data?.chart?.filter(
      (item: EfficiencyAndRevenueChartData) =>
        item?.crewLeaderContactName &&
        item?.laborEfficiency > 0 &&
        item?.earnedRevenue > 0,
    );

  const chartEfficiencyEarnedRevenueData: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Crew Leaders",
        data:
          filteredDataEarnedRevenue?.map(
            (item: EfficiencyAndRevenueChartData) => ({
              // Convert to millions
              x: item?.earnedRevenue / 1000000,
              y: item?.laborEfficiency,
              label: item?.crewLeaderContactName,
            }),
          ) || [],
        backgroundColor: "#57B2C4",
      },
    ],
  };

  return {
    crewLeaderReportData,
    crewLeaderReportLoading,
    crewLeaderReportTableDataSources,
    crewLeaderReportTableLoading,
    chartEfficiencyWarrantyHoursData,
    chartEfficiencyWarrantyHoursLoading,
    chartEfficiencyEarnedRevenueData,
    chartEfficiencyEarnedRevenueLoading,
  };
};
