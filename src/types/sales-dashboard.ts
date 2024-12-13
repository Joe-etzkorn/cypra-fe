export interface SalesDashboardData {
  sales: {
    total: number;
  };
  proposals: {
    count: number;
    total: number;
  };
  closeRate: {
    count: number;
  };
  estimatedGrossMarin: {
    count: any;
  };
  salesWonChart: {
    monthlyRevenue: number[];
    monthlyTotalWon: number[];
    monthlyCloseRate: number[];
  };
  salesMixChart: {
    salesMix: SalesMixItem[];
  };
  leaderboardTable: LeaderboardItem[];
  pipelineTable: PipelineItem[];
}

interface SalesMixItem {
  divisionName: string;
  totalRevenue: number;
  salesMixPercentage: number;
}

interface LeaderboardItem {
  key: string;
  name: string;
  branch: string;
  opportunities: number;
  salesWon: string;
  closeRate: string;
}

interface PipelineItem {
  key: string;
  stage: string;
  estimateCost: string;
  estimatedHours: number;
  opportunities: number;
}

export interface LeaderBoardDataType {
  key: React.Key;
  name: string;
  branch: string;
  opportunities: number;
  salesWon: string;
  closeRate: string;
}

export interface PipelineDataType {
  estimateCost: string;
  estimatedHours: string;
  key: string;
  stage: string;
  opportunities: number;
}
