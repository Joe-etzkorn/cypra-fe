export const REQUEST_URL = {
  //requested account
  REQUESTED_ACCOUNTS: "/requested-account",
  GENERATE_TOKEN: "/requested-account/generate-token",
  VERIFY_TOKEN: "/requested-account/verify-token",
  //user
  USERS: "/users",
  //user invited
  USER_INVITED: "/user-invited",
  VERIFY_INVITED_TOKEN: "/user-invited/verify-token",
  DELETE_USER: "/users",
  //company users
  COMPANY_USERS: "/users/company-users",
  TOGGLE_ADMIN: "/users/toggle-admin",
  //auth
  FORGOT_PASSWORD: "/auth/forgot-password",
  VERIFY_FORGOT_PASSWORD_TOKEN: "/auth/verify-token",
  RESET_PASSWORD: "/auth/reset-password",
  //sales dashboard
  SALES_DASHBOARD: "/sales-dashboard",
  REPORT_PIPELINE_DATA: "/sales-dashboard/report/pipeline",
  BIDDING_DELIVERY_TABLE:
    "/sales-dashboard/report/pipeline/bidding-delivery-table",
  WON_LOST: "/sales-dashboard/report/pipeline/won-lost",
  OPPORTUNITIES_WON: "/sales-dashboard/report/opportunities-won",
  OPPORTUNITIES_WON_TABLE:
    "/sales-dashboard/report/opportunities-won/table-view",
  SERVICES_REPORT: "/operations-dashboard/report/services",
  SERVICES_REPORT_TABLE: "/operations-dashboard/report/services/table-view",
  COMPLETED_OPPORTUNITIES:
    "/operations-dashboard/report/completed-opportunities",
  COMPLETED_OPPORTUNITIES_TABLE:
    "/operations-dashboard/report/completed-opportunities/table-view",
};
