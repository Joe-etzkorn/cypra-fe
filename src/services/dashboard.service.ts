import { REQUEST_URL } from "@constants/req-route";
import { httpMethod } from "@utils/api";

async function getSalesDashboard() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.SALES_DASHBOARD,
  });
  return response;
}

async function getReportPipelineData() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.REPORT_PIPELINE_DATA,
  });
  return response;
}

async function getBiddingDeliveryTable(params: {
  page: number;
  limit: number;
  type: "bidding" | "delivered";
}) {
  const { limit, page, type } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    type: type,
  });

  const response = await httpMethod.GET({
    url: `${REQUEST_URL.BIDDING_DELIVERY_TABLE}?${queryParams.toString()}`,
  });

  return response;
}

async function getWonLost(params: { page: number; limit: number }) {
  const { limit, page } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await httpMethod.GET({
    url: `${REQUEST_URL.WON_LOST}?${queryParams.toString()}`,
  });
  return response;
}

async function getOpportunitiesWon() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.OPPORTUNITIES_WON,
  });
  return response;
}

async function getOpportunitiesWonTable() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.OPPORTUNITIES_WON_TABLE,
  });
  return response;
}

async function getServicesReport() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.SERVICES_REPORT,
  });
  return response;
}

async function getCompletedOpportunities() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.COMPLETED_OPPORTUNITIES,
  });
  return response;
}

async function getCompletedOpportunitiesTable(params: {
  limit: number;
  page: number;
}) {
  const { limit, page } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await httpMethod.GET({
    url: `${
      REQUEST_URL.COMPLETED_OPPORTUNITIES_TABLE
    }?${queryParams.toString()}`,
  });
  return response;
}

async function getOperationsDashboard() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.OPERATIONS_DASHBOARD,
  });
  return response;
}

async function getCrewReportTable(params: { page: number; limit: number }) {
  const { limit, page } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await httpMethod.GET({
    url: `${REQUEST_URL.CREW_REPORT_TABLE}?${queryParams.toString()}`,
  });
  return response;
}

async function getTopServicesTable(params: { page: number; limit: number }) {
  const { limit, page } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await httpMethod.GET({
    url: `${REQUEST_URL.TOP_SERVICES_TABLE}?${queryParams.toString()}`,
  });
  return response;
}

async function getCrewLeaderReport() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.CREW_LEADER_REPORT,
  });
  return response;
}

async function getCrewLeaderReportTable() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.CREW_LEADER_REPORT_TABLE,
  });
  return response;
}

async function getCrewLeaderChartEfficiencyWarrantyHours() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.CREW_LEADER_CHART_EFFICIENCY_WARRANTY_HOURS,
  });
  return response;
}

async function getCrewLeaderChartEfficiencyEarnedRevenue() {
  const response = await httpMethod.GET({
    url: REQUEST_URL.CREW_LEADER_CHART_EFFICIENCY_EARNED_REVENUE,
  });
  return response;
}

export const DashboardService = {
  getSalesDashboard,
  getReportPipelineData,
  getBiddingDeliveryTable,
  getWonLost,
  getOpportunitiesWonTable,
  getOpportunitiesWon,
  getServicesReport,
  getCompletedOpportunities,
  getCompletedOpportunitiesTable,
  getOperationsDashboard,
  getCrewReportTable,
  getTopServicesTable,
  getCrewLeaderReport,
  getCrewLeaderReportTable,
  getCrewLeaderChartEfficiencyWarrantyHours,
  getCrewLeaderChartEfficiencyEarnedRevenue,
};
