import DashboardSkeleton from "@components/dashboard-skeleton";
import {
  faArrowTrendUp,
  faDownload,
  faRotateRight,
  faSliders,
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
import { Bar, Doughnut } from "react-chartjs-2";
import {
  LeaderBoardDataType,
  PipelineDataType,
} from "../../../types/sales-dashboard";
import { useSalesDashboard } from "./use-sales-dashboard";

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
const { Column } = Table;

const SalesDashboardContent: React.FC = () => {
  const {
    sales,
    proposals,
    closeRate,
    estimatedGrossMargin,
    leaderBoardSource,
    pipelineSource,
    doughnutData,
    salesWonData,
    salesWonChart,
    salesWonOptions,
    doughnutOptions,
    dataIndex,
    loading,
  } = useSalesDashboard();

  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto w-2/3 lg:w-full">
      <Content className="p-8 rounded-[32px]">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[24px] md:text-[32px] text-[#667174]">
            Sales Dashboard
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
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
            <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
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
                  <p className="text-xl md:text-2xl text-[#141922]">Revenue</p>
                  <p className="text-3xl md:text-4xl font-semibold text-[#141922]">
                    <span className="text-[#667174]">$</span>
                    <DashboardSkeleton loading={loading}>
                      {currencyFormat(sales?.total.toFixed(2) || 0)}
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

          <Col xxl={6} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Proposals Pending</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <span className="text-[#667174]">$</span>
                <DashboardSkeleton loading={loading}>
                  {currencyFormat(proposals?.total?.toFixed(2) || 0)}
                </DashboardSkeleton>
              </p>
              <p className="text-sm text-[#667174] pt-1">
                75 Opportunities Delivered Status
              </p>
            </Card>
          </Col>

          <Col xxl={4} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Close Rate</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={loading}>
                  {closeRate?.count?.toFixed(2) || 0}
                </DashboardSkeleton>
                <span className="text-[#667174]">%</span>
              </p>
              <p className="text-sm text-[#667174] pt-1">vs previous period</p>
            </Card>
          </Col>

          <Col xxl={6} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Estimated Gross Margin</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={loading}>
                  {estimatedGrossMargin?.count ? (
                    <>
                      {estimatedGrossMargin?.count?.toFixed(1)}
                      <span className="text-[#667174]">%</span>
                    </>
                  ) : (
                    0
                  )}
                </DashboardSkeleton>
              </p>
              <p className="text-sm text-[#667174] pt-1">vs previous period</p>
            </Card>
          </Col>
          <Col
            xxl={16}
            xl={16}
            lg={24}
            md={24}
            xs={24}
            className="flex flex-col"
          >
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px] flex-1">
              <Flex justify="space-between" align="center" wrap>
                <p className="text-lg md:text-xl text-[#667174] whitespace-nowrap">
                  Sales Won
                </p>
                <Flex gap={8} wrap justify="flex-end">
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
              <Row className="flex items-end">
                <Col xl={6} lg={9} md={24}>
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
                          <DashboardSkeleton loading={loading}>
                            {currencyFormat(
                              salesWonChart?.monthlyRevenue?.[
                                dataIndex
                              ]?.toFixed(2) || 0,
                            )}
                          </DashboardSkeleton>
                        </p>
                      </div>
                      <div>
                        <h4>Sales Won</h4>
                        <p className="font-bold">
                          $
                          <DashboardSkeleton loading={loading}>
                            {salesWonChart?.monthlyTotalWon?.[dataIndex] || 0}
                          </DashboardSkeleton>
                        </p>
                      </div>
                      <div>
                        <h4>Close Rate</h4>
                        <p className="font-bold">
                          <DashboardSkeleton loading={loading}>
                            {salesWonChart?.monthlyCloseRate?.[
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
                  <div className="h-full rounded-lg flex items-center justify-center">
                    <Bar data={salesWonData} options={salesWonOptions} />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xxl={8} xl={8} lg={24} md={24} xs={24} className="flex flex-col">
            <Card className="bg-white rounded-2xl shadow-lg h-full 2xl:h-[603px] xl:h-[344px] lg:h-[424px] flex-1">
              <Flex justify="space-between" align="center" wrap>
                <p className="text-lg md:text-xl text-[#667174] whitespace-nowrap">
                  Sales Mix
                </p>
                <Flex gap={8} wrap justify="flex-end">
                  <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer h-[40px] w-[40px]">
                    <img
                      src="/assets/admin/images/filter.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faSliders}
                    fill="#66717480"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] p-3 cursor-pointer"
                  />
                </Flex>
              </Flex>
              <div className="rounded-lg flex items-center justify-center">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-lg md:text-xl text-[#667174]">Leaderboard</p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>
              <Table<LeaderBoardDataType>
                dataSource={leaderBoardSource}
                scroll={{ x: "max-content" }}
              >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Branch" dataIndex="branch" key="branch" />
                <Column
                  title="Opportunities"
                  dataIndex="opportunities"
                  key="opportunities"
                />
                <Column title="Sales Won" dataIndex="salesWon" key="salesWon" />
                <Column
                  title="Close Rate"
                  dataIndex="closeRate"
                  key="closeRate"
                />
              </Table>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-lg md:text-xl text-[#667174]">Pipeline</p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>
              <Table<PipelineDataType>
                dataSource={pipelineSource}
                scroll={{ x: "max-content" }}
              >
                <Column title="Stage" dataIndex="stage" key="stage" />
                <Column
                  title="Estimate Cost"
                  dataIndex="estimateCost"
                  key="estimateCost"
                />
                <Column
                  title="Estimated Hours"
                  dataIndex="estimatedHours"
                  key="estimatedHours"
                />
                <Column
                  title="Opportunities"
                  dataIndex="opportunities"
                  key="opportunities"
                />
              </Table>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SalesDashboardContent;
