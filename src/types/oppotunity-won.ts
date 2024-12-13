export interface OpportunitiesWonData {
  common: {
    count: number;
  };
  estimatedRevenue: {
    total: number;
  };
  estimatedGrossProfit: {
    total: number;
  };
  estimatedGrossMarin: {
    count: number;
  };
  estimatedHours: {
    total: number;
  };
}

export interface OpportunitiesWonTable {
  key: number;
  salesRepresentative: string;
  estimatedRevenue: number;
  estimatedHours: number;
  estimatedCosts: number;
  estimatedGrossProfit: number;
  estimatedGrossMargin: number;
  children?: OpportunitiesWonTable[];
}

export interface OpportunitiesWonTableData {
  table: OpportunitiesWonTable[];
  total: number;
  totalPages: number;
  currentPage: number;
}
