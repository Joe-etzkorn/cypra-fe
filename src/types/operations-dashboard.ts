export type OperationsDashboardData = {
  common: {
    total: number;
  };
  grossProfit: {
    total: number;
  };
  grossMargin: {
    count: number;
  };
  hoursVariance: {
    count: number;
  };
  laborRateVariance: {
    total: number;
  };
  earnedRevenueChart: {
    monthlyRevenue: number[];
    monthlyGrossMargin: number[];
    monthlyGrossProfit: number[];
  };
  operationsBacklog: {
    totalRevenueBacklog: number;
    totalHoursBacklog: number;
    totalRunway: number;
  };
};

export type CrewReportTableData = {
  companyId: number;
  crewLeaderContactName: string | null;
  earnedRevenue: number;
  laborEfficiency: number;
  estimatedGMPercent: number;
  actualGMPercent: number;
};

export type TopServicesTableData = {
  companyId: number;
  serviceName: string;
  earnedRevenue: number;
  grossProfit: number;
  laborEfficiency: number;
  estimatedGMPercent: number;
  actualGMPercent: number;
};

export type TopServicesTableResponse = {
  table: TopServicesTableData[];
  currentPage: number;
  totalPages: number;
  total: number;
};

export type CrewReportTableResponse = {
  table: CrewReportTableData[];
  currentPage: number;
  totalPages: number;
  total: number;
};
