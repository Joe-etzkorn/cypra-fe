import DashboardSkeleton from "@components/dashboard-skeleton";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faDownload,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currencyFormat } from "@utils/common";
import {
  Card,
  Col,
  DatePicker,
  Flex,
  Layout,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  CrewReportTableData,
  TopServicesTableData,
} from "../../../types/operations-dashboard";
import { CrewReportsColumns } from "./crew-reports-table";
import { TopServicesColumns } from "./top-services-table";
import { useOperationsDashboard } from "./use-operations-dashboard";
import { useOperationDashboardPagination } from "@stores/operation-dashboard-pagination";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
);
const { Content } = Layout;
const { RangePicker } = DatePicker;

const OperationsDashboardContent: React.FC = () => {
  const {
    operationsDashboardData,
    crewReportTableSources,
    topServicesTableSources,
    crewReportTableLoading,
    topServicesTableLoading,
    salesWonData,
    salesWonOptions,
    isLoading,
    dataIndex,
    crewReportTableData,
    topServicesTableData,
  } = useOperationsDashboard();
  const { setCrewReportPage, setTopServicesPage } =
    useOperationDashboardPagination();

  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto">
      <Content className="p-8 rounded-[32px]">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Operations Dashboard</p>
          <div className="flex flex-row flex-wrap gap-2">
            <Flex
              justify="space-between"
              align="center"
              className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
            >
              <p className="text-[#141922] text-xs font-semibold">Branch</p>
              <Space direction="vertical" size={12} className="pl-2">
                <Select
                  size={"middle"}
                  defaultValue="All"
                  onChange={() => {}}
                  style={{ width: 100 }}
                  options={[
                    {
                      label: "All",
                      value: 1,
                    },
                    {
                      label: "Branch 1",
                      value: 2,
                    },
                  ]}
                />
              </Space>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-2 py-1 cursor-pointer"
            >
              <p>Timeframe</p>
              <Space direction="vertical" size={12} className="pl-2">
                <RangePicker className="rounded-xl" />
              </Space>
            </Flex>
            <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer h-10 w-10">
              <img
                src="/assets/admin/images/filter.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>
            <FontAwesomeIcon
              icon={faRotateRight}
              fill="#66717480"
              className="rounded-full bg-[#FFFFFF] border border-[#66717480] p-3 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faDownload}
              fill="#66717480"
              className="rounded-full bg-[#FFFFFF] border border-[#66717480] p-3 cursor-pointer"
            />
          </div>
        </div>
        <Row gutter={[24, 24]} className="flex flex-col md:flex-row pb-4">
          <Col xxl={8} xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl text-[#141922] whitespace-nowrap">
                    Earned Revenue
                  </p>
                  <p className="text-4xl font-semibold text-[#141922]">
                    <span className="text-[#667174]">$</span>
                    <DashboardSkeleton loading={isLoading}>
                      {currencyFormat(
                        operationsDashboardData?.common?.total?.toFixed(2) || 0,
                      )}
                    </DashboardSkeleton>
                  </p>
                  <p className="text-sm text-[#667174]">
                    vs previous $8,202,093
                  </p>
                </div>
                <div className="font-semibold rounded-xl bg-[#59C9A5] text-white px-2 py-0.5 mt-3">
                  <FontAwesomeIcon icon={faArrowTrendUp} className="mr-2" />
                  30%
                </div>
              </div>
            </Card>
          </Col>
          <Col xxl={6} xl={12} lg={12} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg ant-card-report-padding">
              <p className="text-sm text-[#141922]">vs previous $8,202,093</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $
                <DashboardSkeleton loading={isLoading}>
                  {currencyFormat(
                    operationsDashboardData?.grossProfit?.total?.toFixed(2) ||
                      0,
                  )}
                </DashboardSkeleton>
              </p>
              <p className="text-sm text-[#667174] pt-1">
                up 30% vs previous period
              </p>
            </Card>
          </Col>
          <Col xxl={4} xl={8} lg={9} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg ant-card-report-padding">
              <p className="text-sm text-[#141922]">Gross Margin</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {operationsDashboardData?.grossMargin?.count?.toFixed(2) || 0}
                </DashboardSkeleton>
                %
              </p>
              <p className="text-sm text-[#667174] pt-1">vs previous period</p>
            </Card>
          </Col>
          <Col xxl={3} xl={8} lg={7} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center ant-card-report-padding border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Hours Variance</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {operationsDashboardData?.hoursVariance?.count?.toFixed(2) ||
                    0}
                </DashboardSkeleton>
                %
              </p>
              <Flex
                justify="center"
                align="center"
                className="flex-wrap pt-1"
                gap={5}
              >
                <FontAwesomeIcon
                  icon={faArrowTrendDown}
                  className="text-[#EF6F6C]"
                />
                <p className="text-[#EF6F6C]">11%</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={3} xl={8} lg={8} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center ant-card-report-padding border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Labor Rate Variance</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $
                <DashboardSkeleton loading={isLoading}>
                  {operationsDashboardData?.laborRateVariance?.total?.toFixed(
                    2,
                  ) || 0}
                </DashboardSkeleton>
              </p>
              <Flex
                justify="center"
                align="center"
                className="flex-wrap pt-1"
                gap={5}
              >
                <FontAwesomeIcon
                  icon={faArrowTrendDown}
                  className="text-[#EF6F6C]"
                />
                <p className="text-[#EF6F6C]">4%</p>
              </Flex>
            </Card>
          </Col>

          <Col xxl={16} xl={16} lg={24} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px]">
              <Flex
                justify="space-between"
                align="center"
                className="flex-col md:flex-row"
              >
                <p className="text-xl text-[#667174] whitespace-nowrap">
                  Earned Revenue
                </p>
                <Flex gap={8} className="flex-wrap" justify="flex-end">
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
                  >
                    <p className="text-[#141922] text-xs font-semibold">View</p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <Select
                        size={"middle"}
                        defaultValue="Cumulative"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Cumulative",
                            value: 1,
                          },
                          {
                            label: "Individual",
                            value: 2,
                          },
                        ]}
                      />
                    </Space>
                  </Flex>
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
                  >
                    <p className="text-[#141922] text-xs font-semibold">View</p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <Select
                        size={"middle"}
                        defaultValue="Monthly"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Monthly",
                            value: 1,
                          },
                          {
                            label: "Weekly",
                            value: 2,
                          },
                          {
                            label: "Daily",
                            value: 3,
                          },
                        ]}
                      />
                    </Space>
                  </Flex>
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
                  >
                    <p className="text-[#141922] text-xs font-semibold">
                      Compare to
                    </p>
                    <Space
                      direction="vertical"
                      size={12}
                      className="pl-2 rounded-xl"
                    >
                      <Select
                        size={"middle"}
                        defaultValue="Previous Year"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Previous Year",
                            value: 1,
                          },
                          {
                            label: "2 Yeas Ago",
                            value: 2,
                          },
                        ]}
                      />
                    </Space>
                  </Flex>
                </Flex>
              </Flex>
              <Row className="flex flex-col items-end md:flex-row">
                <Col xl={6} lg={9} md={24} className="flex-end">
                  <Card className="sales-won-bg rounded-2xl shadow-lg relative min-w-[120px]">
                    <h3
                      className="text-white text-sm font-semibold"
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                        whiteSpace: "nowrap",
                        position: "absolute",
                        left: "-30px",
                        top: "50%",
                      }}
                    >
                      Monthly Average
                    </h3>
                    <Flex className="flex-col text-white gap-1 pl-5">
                      <div>
                        <h4>Revenue</h4>
                        <p className="font-bold">
                          $
                          <DashboardSkeleton loading={isLoading}>
                            {currencyFormat(
                              operationsDashboardData?.earnedRevenueChart?.monthlyRevenue?.[
                                dataIndex
                              ]?.toFixed(2) || 0,
                            )}
                          </DashboardSkeleton>
                        </p>
                      </div>
                      <div>
                        <h4>Gross Profit</h4>
                        <p className="font-bold">
                          $
                          <DashboardSkeleton loading={isLoading}>
                            {currencyFormat(
                              operationsDashboardData?.earnedRevenueChart?.monthlyGrossMargin?.[
                                dataIndex
                              ]?.toFixed(2) || 0,
                            )}
                          </DashboardSkeleton>
                        </p>
                      </div>
                      <div>
                        <h4>Gross Margin</h4>
                        <p className="font-bold">
                          <DashboardSkeleton loading={isLoading}>
                            {operationsDashboardData?.earnedRevenueChart?.monthlyGrossMargin?.[
                              dataIndex
                            ]?.toFixed(2) || 0}
                          </DashboardSkeleton>
                          %
                        </p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xl={18} lg={15} md={24}>
                  <div className="h-full rounded-lg flex items-center">
                    <Bar data={salesWonData} options={salesWonOptions} />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xxl={8} xl={8} lg={24} md={24} xs={24} className="flex flex-col">
            <Card className="sales-won-bg rounded-2xl shadow-lg relative min-w-[120px] h-full 2xl:h-[603px] xl:h-[344px] lg:h-[424px] flex-1">
              <Flex className="flex-col text-white gap-4 pl-5 text-sm">
                <h3 className="text-xl">Operations Backlog</h3>
                <div>
                  <h4>Revenue Backlog</h4>
                  <p className="font-bold text-xl">
                    $
                    <DashboardSkeleton loading={isLoading}>
                      {currencyFormat(
                        operationsDashboardData?.operationsBacklog?.totalRevenueBacklog?.toFixed(
                          2,
                        ) || 0,
                      )}
                    </DashboardSkeleton>
                  </p>
                </div>
                <div>
                  <h4>Hours Backlog</h4>
                  <p className="font-bold text-xl">
                    <DashboardSkeleton loading={isLoading}>
                      {operationsDashboardData?.operationsBacklog?.totalHoursBacklog?.toFixed(
                        2,
                      ) || 0}
                    </DashboardSkeleton>{" "}
                    Hours
                  </p>
                </div>
                <div>
                  <h4>Runway</h4>
                  <p className="font-bold text-xl">
                    <DashboardSkeleton loading={isLoading}>
                      {operationsDashboardData?.operationsBacklog?.totalRunway?.toFixed(
                        2,
                      ) || 0}
                    </DashboardSkeleton>{" "}
                    Days
                  </p>
                </div>
              </Flex>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg  h-[500px]">
              <p className="text-xl text-[#667174] mb-4">Crew Reports</p>
              <Table<CrewReportTableData>
                dataSource={crewReportTableSources}
                columns={CrewReportsColumns}
                loading={crewReportTableLoading}
                pagination={{
                  current: crewReportTableData?.currentPage,
                  total: crewReportTableData?.total,
                  onChange: (page) => {
                    setCrewReportPage(page);
                  },
                  hideOnSinglePage: true,
                }}
                scroll={{ x: "max-content", y: 280 }}
              />
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg  h-[500px]">
              <p className="text-xl text-[#667174] mb-4">Top Services</p>
              <Table<TopServicesTableData>
                dataSource={topServicesTableSources}
                columns={TopServicesColumns}
                loading={topServicesTableLoading}
                pagination={{
                  current: topServicesTableData?.currentPage,
                  total: topServicesTableData?.total,
                  onChange: (page) => {
                    setTopServicesPage(page);
                  },
                  hideOnSinglePage: true,
                }}
                scroll={{ x: "max-content", y: 280 }}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default OperationsDashboardContent;
