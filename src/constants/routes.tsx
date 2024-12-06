import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@layout/index";
import ProtectedRoute from "./protected-route";
import { Suspense } from "react";
import { Spin } from "antd";
import RouteGuard from "./route.guard";
import { ROLE } from "./role";
import AdminFlowGuard from "./admin-flow.guard";
import UserInvitedGuard from "./user-invited.guard";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/super-admin-signin",
      lazy: async () => {
        const SuperAdminSignin = await import("@features/super-admin-signin");
        return {
          Component: () => (
            <RouteGuard
              component={SuperAdminSignin.default}
              allowedRoles={[ROLE.SUPER_ADMIN]}
              publicRoute
            />
          ),
        };
      },
    },
    {
      path: "/signin",
      lazy: async () => {
        const SignIn = await import("@features/signin");
        return { Component: SignIn.default };
      },
    },
    {
      path: "/signup",
      lazy: async () => {
        const SignUp = await import("@features/signup");
        return { Component: SignUp.default };
      },
    },
    {
      path: "/trouble-signin",
      lazy: async () => {
        const TroubleSignIn = await import("@features/trouble-signin");
        return { Component: TroubleSignIn.default };
      },
    },
    {
      path: "/set-password",
      lazy: async () => {
        const SetPassword = await import("@features/set-password");
        return { Component: SetPassword.default };
      },
    },
    {
      path: "/user-invited",
      lazy: async () => {
        const UserInvited = await import("@features/user-invited");
        // return { Component: UserInvited.default };
        return {
          Component: () => (
            <UserInvitedGuard component={UserInvited.default} />
          ),
        };
      },
    },
    {
      path: "/get-started",
      lazy: async () => {
        const GetStarted = await import(
          "@features/get-started-flow/get-started"
        );
        return { Component: GetStarted.default };
      },
    },
    {
      path: "/admin-setup",
      lazy: async () => {
        const AdminSetup = await import("@features/admin-flow-get-started");
        // return { Component: AdminSetup.default };
        return {
          Component: () => (
            <AdminFlowGuard component={AdminSetup.default} />
          ),
        };
      },
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout>
            <Suspense
              fallback={
                <div
                  style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spin />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </MainLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "account-request",
          lazy: async () => {
            const AccountRequest = await import("@features/account-request");
            return {
              Component: () => (
                <RouteGuard
                  component={AccountRequest.default}
                  allowedRoles={[ROLE.SUPER_ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-sales/dashboard",
          lazy: async () => {
            const AdminSalesDashboard = await import(
              "@features/admin/sales-dashboard/sales-dashboard"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminSalesDashboard.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-sales/reports/sales-pipeline",
          lazy: async () => {
            const AdminReportsSalesPipeline = await import(
              "@features/admin/sales-reports/sales-pipeline/sales-pipeline"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminReportsSalesPipeline.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-sales/reports/customer-detail",
          lazy: async () => {
            const AdminReportCustomerDetail = await import(
              "@features/admin/sales-reports/customer-detail/customer-detail"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminReportCustomerDetail.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-sales/reports/opportunities-won",
          lazy: async () => {
            const AdminOpportunitiesWon = await import(
              "@features/admin/sales-reports/opportunities-won/opportunities-won"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminOpportunitiesWon.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-operations/dashboard",
          lazy: async () => {
            const AdminOperationsDashboard = await import(
              "@features/admin/operations-dashboard/operations-dashboard"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminOperationsDashboard.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-operations/reports/crew-leader",
          lazy: async () => {
            const AdminReportCrewLeader = await import(
              "@features/admin/operations-reports/crew-leader/crew-leader"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminReportCrewLeader.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-operations/reports/services",
          lazy: async () => {
            const AdminServicesReport = await import(
              "@features/admin/operations-reports/services-report/services-report"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminServicesReport.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
        {
          path: "admin-operations/reports/opportunities",
          lazy: async () => {
            const AdminOpportunitiesReport = await import(
              "@features/admin/operations-reports/opportunities-report/opportunities-report"
            );
            return {
              Component: () => (
                <RouteGuard
                  component={AdminOpportunitiesReport.default}
                  allowedRoles={[ROLE.ADMIN]}
                />
              ),
            };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
