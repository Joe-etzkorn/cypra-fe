export type OpportunitiesReport = {
  common: {
    count: number;
  };
  actualRevenue: {
    total: number;
  };
  actualGrossProfit: {
    total: number;
  };
  actualGrossMarin: {
    count: number;
  };
  laborEfficiency: {
    total: number;
  };
};

export type OpportunitiesReportTable = {
  key: number;
  propertyName: string;
  actualRevenue: number;
  actualHours: number;
  actualCosts: number;
  actualGrossProfit: number;
  actualGrossMargin: number | null;
  children?: OpportunitiesReportTable[];
};

export type OpportunitiesReportTableData = {
  table: OpportunitiesReportTable[];
};
