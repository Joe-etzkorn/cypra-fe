import React from "react";
import { Layout, Card, Row, Col, Flex, Table, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faRotateRight,
  faDownload,
  faSliders,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";
import { DatePicker, Space } from "antd";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { doughnutData, doughnutOptions } from "./doughnut-chart-data";
import { SalesWonData, SalesWonOptions } from "./bar-chart-data";
import {
  CrewReportDataType,
  CrewReportsColumns,
  CrewReportsSources,
} from "./crew-reports-table";
import {
  TopServicesColumns,
  TopServicesDataType,
  TopServicesSources,
} from "./top-services-table";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);
const { Content } = Layout;
const { RangePicker } = DatePicker;

const OperationsDashboardContent: React.FC = () => {
  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto">
      <Content className="p-8 rounded-[32px]">
        <div className="flex justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Operations Dashboard</p>
          <div className="flex items-center gap-2">
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
          <Col xl={8} lg={12} md={24} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl text-[#141922]">Earned Revenue</p>
                  <p className="text-4xl font-semibold text-[#141922]">
                    <span className="text-[#667174]">$</span>10,750,322
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
          <Col xl={6} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg ant-card-report-padding">
              <p className="text-sm text-[#141922]">vs previous $8,202,093</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $3,150,000
              </p>
              <p className="text-sm text-[#667174] pt-1">
                up 30% vs previous period
              </p>
            </Card>
          </Col>
          <Col xl={4} lg={9} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg ant-card-report-padding">
              <p className="text-sm text-[#141922]">Gross Margin</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                52.3%
              </p>
              <p className="text-sm text-[#667174] pt-1">vs previous period</p>
            </Card>
          </Col>
          <Col xl={3} lg={7} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center ant-card-report-padding border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Hours Variance</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                48.9%
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
          <Col xl={3} lg={8} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center ant-card-report-padding border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Labor Rate Variance</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $2.82
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

          <Col xl={16} lg={16} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px]">
              <Flex justify="space-between" align="center">
                <p className="text-xl text-[#667174]">Earned Revenue</p>
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
                        <p className="font-bold">$29,110.04</p>
                      </div>
                      <div>
                        <h4>Gross Profit</h4>
                        <p className="font-bold">$12,312.23</p>
                      </div>
                      <div>
                        <h4>Gross Margin</h4>
                        <p className="font-bold">49.2%</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xl={18} lg={15} md={24}>
                  <div className="h-full rounded-lg flex items-center justify-center">
                    <Bar data={SalesWonData} options={SalesWonOptions} />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xl={8} lg={8} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg h-full 2xl:h-[603px] xl:h-[344px] lg:h-[424px]">
              <Flex justify="space-between" align="center">
                <p className="text-xl text-[#667174]">Revenue Mix</p>
                <Flex gap={8}>
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
              <div className="rounded-lg flex items-center justify-center 2xl:h-[450px] xl:h-[250px] lg:h-[424px]">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-xl text-[#667174] mb-4">Crew Reports</p>
              <Table<CrewReportDataType>
                dataSource={CrewReportsSources}
                columns={CrewReportsColumns}
                pagination={false}
                scroll={{ x: "max-content" }}
              />
            </Card>
          </Col>

          <Col xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-xl text-[#667174] mb-4">Top Services</p>
              <Table<TopServicesDataType>
                dataSource={TopServicesSources}
                columns={TopServicesColumns}
                pagination={false}
                scroll={{ x: "max-content" }}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default OperationsDashboardContent;
