/* eslint-disable no-useless-escape */
import DashboardSkeleton from "@components/dashboard-skeleton";
import { faDownload, faRotateRight } from "@fortawesome/free-solid-svg-icons";
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
import { Doughnut } from "react-chartjs-2";
import {
  OpportunityItem,
  WonLostItem,
} from "../../../../types/report-pipeline";
import { doughnutOptions } from "./doughnut-chart-data";
import { useSalesPipeline } from "./use-sales-pipeline";
import { useSalesPipelinePagination } from "@stores/use-sales-pipeline-pagination";

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

const SalesPipelineContent: React.FC = () => {
  const {
    pendingOpportunities,
    pendingEstimatedDollars,
    biddingCount,
    deliveredCount,
    mostActiveDivision,
    averageSalesCycle,
    biddingSource,
    deliveredSource,
    wonLostSource,
    doughnutData,
    isLoading,
    biddingColumns,
    deliveredColumns,
    opportunitiesColumns,
    biddingTableLoading,
    deliveredTableLoading,
    wonLostLoading,
    biddingTotal,
    deliveredTotal,
    opportunitiesTotal,
  } = useSalesPipeline();
  const {
    biddingPage,
    deliveredPage,
    opportunitiesPage,
    setBiddingPage,
    setDeliveredPage,
    setOpportunitiesPage,
  } = useSalesPipelinePagination();

  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto">
      <Content className="p-8 rounded-[32px]">
        <div className="flex justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Sales Pipeline Report</p>
          <div className="flex items-center gap-2">
            <Flex gap={8} wrap justify="flex-end">
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
                className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
              >
                <p className="text-[#141922] text-xs font-semibold">Division</p>
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
                        label: "Division 1",
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
                  Sales Rep
                </p>
                <Space
                  direction="vertical"
                  size={12}
                  className="pl-2 rounded-xl"
                >
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
                        label: "Sales Rep 1",
                        value: 2,
                      },
                    ]}
                  />
                </Space>
              </Flex>
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
        <Row gutter={[24, 24]} className="flex items-center pb-4">
          <Col xxl={6} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <div className="flex flex-col gap-1">
                <p className="text-[40px] leading-[48px] font-semibold text-[#141922]">
                  <DashboardSkeleton loading={isLoading}>
                    {pendingOpportunities || 0}
                  </DashboardSkeleton>
                </p>
                <p className="text-xl font-semibold text-[#141922]">
                  Pending Opportunities
                </p>
                <p className="text-sm text-[#667174]">
                  <DashboardSkeleton loading={isLoading}>
                    ${currencyFormat((pendingEstimatedDollars || 0).toFixed(2))}{" "}
                    estimated dollars
                  </DashboardSkeleton>
                </p>
              </div>
            </Card>
          </Col>
          <Col xxl={4} xl={6} lg={6} md={6} sm={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Opportunities Bidding</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {biddingCount || 0}
                </DashboardSkeleton>
              </p>
            </Card>
          </Col>
          <Col xxl={4} xl={6} lg={6} md={6} sm={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Opportunities Delivered</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {deliveredCount || 0}
                </DashboardSkeleton>
              </p>
            </Card>
          </Col>
          <Col xxl={5} xl={12} lg={12} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Most Active Division</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {mostActiveDivision?.divisionName || ""}
                </DashboardSkeleton>
              </p>
              <p className="text-sm text-[#667174] pt-1">
                With $
                {currencyFormat(
                  (+mostActiveDivision?.estimatedDollars || 0).toFixed(2),
                )}{" "}
                sales pending
              </p>
            </Card>
          </Col>
          <Col xxl={5} xl={12} lg={12} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Average Sales Cycle</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {/* Day must be integer */}
                  {averageSalesCycle?.count.toFixed(0) || 0}
                </DashboardSkeleton>
                <span className="text-[#667174]"> Days</span>
              </p>
              <p className="text-sm text-[#667174] pt-1">
                From delivery to decision
              </p>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-xl text-[#667174]">Bidding</p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>{" "}
              <Table<OpportunityItem>
                loading={biddingTableLoading}
                dataSource={biddingSource}
                columns={biddingColumns}
                scroll={{ x: "max-content", y: 65 * 5 }}
                pagination={{
                  current: biddingPage,
                  total: biddingTotal,
                  pageSize: 10,
                  onChange: (page) => setBiddingPage(page),
                }}
                summary={(pageData) => {
                  let totalEstHrs = 0;
                  let totalEstProfit = 0;

                  pageData.forEach(({ estHrs, estProfit }) => {
                    totalEstHrs += estHrs;
                    totalEstProfit += parseFloat(
                      estProfit.replace(/[\$,]/g, ""),
                    );
                  });

                  return (
                    <Table.Summary.Row>
                      <Table.Summary.Cell
                        index={0}
                        colSpan={3}
                        className="font-semibold text-right"
                      >
                        Total
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={1} className="font-semibold">
                        {currencyFormat(totalEstHrs.toFixed(2))}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} className="font-semibold">
                        ${currencyFormat(totalEstProfit.toFixed(2))}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={3} />
                    </Table.Summary.Row>
                  );
                }}
              />
            </Card>
          </Col>
          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-xl text-[#667174]">Delivered</p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>
              <Table<OpportunityItem>
                loading={deliveredTableLoading}
                dataSource={deliveredSource}
                columns={deliveredColumns}
                pagination={{
                  current: deliveredPage,
                  total: deliveredTotal,
                  pageSize: 10,
                  onChange: (page) => setDeliveredPage(page),
                }}
                scroll={{ x: "max-content", y: 65 * 5 }}
                summary={(pageData) => {
                  let totalEstHrs = 0;
                  let totalEstProfit = 0;

                  pageData.forEach(({ estHrs, estProfit }) => {
                    totalEstHrs += estHrs;
                    totalEstProfit += parseFloat(
                      estProfit.replace(/[\$,]/g, ""),
                    );
                  });

                  return (
                    <Table.Summary.Row>
                      <Table.Summary.Cell
                        index={0}
                        colSpan={4}
                        className="font-semibold text-right"
                      >
                        Total
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={1} className="font-semibold">
                        {currencyFormat(totalEstHrs.toFixed(2))}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} className="font-semibold">
                        ${currencyFormat(totalEstProfit.toFixed(2))}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={3} />
                    </Table.Summary.Row>
                  );
                }}
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px]">
              <Flex justify="space-between" align="center">
                <p className="text-xl text-[#667174]">
                  Opportunities Recently Won/Lost
                </p>
                <Flex gap={8} className="flex-wrap" justify="flex-end">
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-[3px] px-1 cursor-pointer"
                  >
                    <p>Timeframe</p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <RangePicker className="rounded-xl" />
                    </Space>
                  </Flex>
                  <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer h-10 w-10">
                    <img src="/assets/admin/images/filter.svg" alt="" />
                  </div>
                </Flex>
              </Flex>
              <Row gutter={[24, 24]} className="mt-6 justify-center">
                <Col span={10}>
                  <Flex justify="center" align="center" className="flex-col">
                    <div className="rounded-lg flex items-center justify-center relative">
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                      <p className="text-[#141922] text-[40px] font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {doughnutData.datasets[0].data[0]}%
                        <p className="text-[#667174] text-xl text-center">
                          Won
                        </p>
                      </p>
                    </div>
                    <p className="text-[#667174] mt-6">
                      of past{" "}
                      <strong>{currencyFormat(opportunitiesTotal)}</strong>{" "}
                      opportunities
                    </p>
                  </Flex>
                </Col>
                <Col xl={14} lg={24} md={24} xs={24}>
                  <Table<WonLostItem>
                    loading={wonLostLoading}
                    dataSource={wonLostSource}
                    columns={opportunitiesColumns}
                    pagination={{
                      total: opportunitiesTotal,
                      current: opportunitiesPage,
                      pageSize: 10,
                      onChange: (page) => setOpportunitiesPage(page),
                    }}
                    scroll={{ x: "max-content", y: 65 * 5 }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SalesPipelineContent;
