export type CrewLeaderReportData = {
  common: {
    count: number;
  };
  earnedRevenue: {
    total: number;
  };
  grossMargin: {
    count: number;
  };
  hoursVariance: {
    count: number;
  };
};

export type CrewLeaderTableData = {
  key: string;
  crewLeader: string;
  earnedRevenue: number;
  estimatedHours: number;
  hours: number;
  laborVariance: number;
  grossProfit: number;
  estimatedGrossMargin: number;
  grossMargin: number;
  percentVariance: number;
  children: CrewLeaderTableData[];
};

export type EfficiencyAndRevenueChartData = {
  crewLeaderContactName: string | null;
  laborEfficiency: number;
  earnedRevenue: number;
};

export type EfficiencyAndWarrantyHoursChartData = {
  crewLeaderContactName: string | null;
  laborEfficiency: number;
  warrantyHoursAvg: number;
};
