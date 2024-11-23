import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "@layout/index"
import ProtectedRoute from "./protected-route"
import { Suspense } from "react"
import { Spin } from "antd"

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/signin",
      lazy: async () => {
        const SignIn = await import("@features/signin")
        return { Component: SignIn.default }
      },
    },
    {
      path: "/signup",
      lazy: async () => {
        const SignUp = await import("@features/signup")
        return { Component: SignUp.default }
      },
    },
    {
      path: "/trouble-signin",
      lazy: async () => {
        const TroubleSignIn = await import("@features/trouble-signin")
        return { Component: TroubleSignIn.default }
      },
    },
    {
      path: "/set-password",
      lazy: async () => {
        const SetPassword = await import("@features/set-password")
        return { Component: SetPassword.default }
      },
    },
    {
      path: "/user-invited",
      lazy: async () => {
        const UserInvited = await import("@features/user-invited")
        return { Component: UserInvited.default }
      },
    },
    {
      path: "/get-started",
      lazy: async () => {
        const GetStarted = await import(
          "@features/get-started-flow/get-started"
        )
        return { Component: GetStarted.default }
      },
    },
    {
      path: "/admin-setup",
      lazy: async () => {
        const AdminSetup = await import("@features/admin-flow-get-started")
        return { Component: AdminSetup.default }
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
          path: "admin-sales/dashboard",
          lazy: async () => {
            const AdminSalesDashboard = await import(
              "@features/admin/sales-dashboard/sales-dashboard"
            )
            return { Component: AdminSalesDashboard.default }
          },
        },
        {
          path: "admin-sales/reports/sales-pipeline",
          lazy: async () => {
            const AdminReportsSalesPipeline = await import(
              "@features/admin/sales-reports/sales-pipeline/sales-pipeline"
            )
            return { Component: AdminReportsSalesPipeline.default }
          },
        },
        {
          path: "admin-sales/reports/customer-detail",
          lazy: async () => {
            const AdminReportCustomerDetail = await import(
              "@features/admin/sales-reports/customer-detail/customer-detail"
            )
            return { Component: AdminReportCustomerDetail.default }
          },
        },
        {
          path: "admin-sales/reports/opportunities-won",
          lazy: async () => {
            const AdminOpportunitiesWon = await import(
              "@features/admin/sales-reports/opportunities-won/opportunities-won"
            )
            return { Component: AdminOpportunitiesWon.default }
          },
        },
        {
          path: "admin-operations/dashboard",
          lazy: async () => {
            const AdminOperationsDashboard = await import(
              "@features/admin/operations-dashboard/operations-dashboard"
            )
            return { Component: AdminOperationsDashboard.default }
          },
        },
        {
          path: "admin-operations/reports/crew-leader",
          lazy: async () => {
            const AdminReportCrewLeader = await import(
              "@features/admin/operations-reports/crew-leader/crew-leader"
            )
            return { Component: AdminReportCrewLeader.default }
          },
        },
        {
          path: "admin-operations/reports/services",
          lazy: async () => {
            const AdminServicesReport = await import(
              "@features/admin/operations-reports/services-report/services-report"
            )
            return { Component: AdminServicesReport.default }
          },
        },
        {
          path: "admin-operations/reports/opportunities",
          lazy: async () => {
            const AdminOpportunitiesReport = await import(
              "@features/admin/operations-reports/opportunities-report/opportunities-report"
            )
            return { Component: AdminOpportunitiesReport.default }
          },
        },
      ],
    },
  ])

export const AppRouter = () => {
  const router = createAppRouter()

  return <RouterProvider router={router} />
}
