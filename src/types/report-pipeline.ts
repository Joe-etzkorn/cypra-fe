export interface ReportPipelineData {
  common: {
    count: number;
    total: number;
  };
  bidding: {
    count: number;
  };
  delivered: {
    count: number;
  };
  mostDivision: {
    divisionName: string;
    estimatedDollars: string;
    opportunities: number;
  };
  averageSalesCycle: {
    count: number;
  };
  biddingTable: OpportunityItem[];
  deliveredTable: OpportunityItem[];
  wonLost: {
    table: WonLostItem[];
    chart: number[];
    total: number;
  };
}

export interface BiddingDeliveryTableData {
  table: OpportunityItem[];
  total: number;
}

export interface WonLostData {
  table: WonLostItem[];
  chart: number[];
  total: number;
}

export interface OpportunityItem {
  key: number;
  property: string;
  division: string;
  name: string;
  estHrs: number;
  estProfit: any;
}

export interface WonLostItem extends OpportunityItem {
  status: 'Won' | 'Lost';
  date: string;
}


export enum TableType {
  BIDDING = "bidding",
  DELIVERED = "delivered",
}
