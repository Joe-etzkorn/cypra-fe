import { REQUEST_URL } from "@constants/req-route";
import { DashboardService } from "@services/dashboard.service";
import { useQuery } from "@tanstack/react-query";
import { ServicesReportDataType } from "../../../../types/service-dashboard";
import { currencyFormat } from "@utils/common";

export const useServiceReport = () => {
  const { data, isLoading } = useQuery({
    queryKey: [REQUEST_URL.SERVICES_REPORT],
    queryFn: DashboardService.getServicesReport,
  });

  const servicesReport = data?.data?.table as ServicesReportDataType[];

  const dataSource: any = servicesReport?.map((item) => ({
    key: item?.key,
    serviceName: item?.serviceName,
    earnedRevenue: currencyFormat(parseFloat(item?.earnedRevenue)?.toFixed(2)),
    estimatedHours: parseFloat(item?.estimatedHours)?.toFixed(2),
    hours: parseFloat(item?.hours)?.toFixed(2),
    laborVariance: parseFloat(item?.laborVariance)?.toFixed(2),
    grossProfit: currencyFormat(parseFloat(item?.grossProfit)?.toFixed(2)),
    estimatedGrossMargin: parseFloat(item?.estimatedGrossMargin)?.toFixed(2),
    grossMargin: parseFloat(item?.grossMargin)?.toFixed(2),
    percentVariance: parseFloat(item?.percentVariance)?.toFixed(2),
    children: item?.children?.map((child) => ({
      key: child?.key,
      serviceName: child?.serviceName,
      earnedRevenue: currencyFormat(
        parseFloat(child?.earnedRevenue)?.toFixed(2),
      ),
      estimatedHours: parseFloat(child?.estimatedHours)?.toFixed(2),
      hours: parseFloat(child?.hours)?.toFixed(2),
      laborVariance: parseFloat(child?.laborVariance)?.toFixed(2),
      grossProfit: currencyFormat(parseFloat(child?.grossProfit)?.toFixed(2)),
      estimatedGrossMargin: parseFloat(child?.estimatedGrossMargin)?.toFixed(2),
      grossMargin: parseFloat(child?.grossMargin)?.toFixed(2),
      percentVariance: parseFloat(child?.percentVariance)?.toFixed(2),
    })),
  }));

  return { servicesReport, dataSource, isLoading };
};
