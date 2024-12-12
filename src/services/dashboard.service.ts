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
  type: 'bidding' | 'delivered';
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

async function getWonLost(params: {
  page: number;
  limit: number;
}) {
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

export const DashboardService = {
  getSalesDashboard,
  getReportPipelineData,
  getBiddingDeliveryTable,
  getWonLost,
};
