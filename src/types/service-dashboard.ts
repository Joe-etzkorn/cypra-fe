export type ServicesReportDataType = {
  key: string;
  serviceName: string;
  earnedRevenue: string;
  estimatedHours: string;
  hours: string;
  laborVariance: string;
  grossProfit: string;
  estimatedGrossMargin: string;
  grossMargin: string;
  percentVariance: string;
  children: ServicesReportDataType[];
};
