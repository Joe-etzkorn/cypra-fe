import React from "react";
import { Layout, Card, Row, Col, Flex, Select, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faRotateRight,
  faDownload,
  faCaretRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { DatePicker, Space } from "antd";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  CrewLeaderColumns,
  CrewLeaderDataType,
  CrewLeaderSources,
} from "./crew-leader-table";
import CrewLeaderEfficiencyAndRevenueChart from "./crew-leader-eff-and-revenue-chart";
import CrewLeaderEffAndWarrantyHoursChart from "./crew-leader-eff-and-warranty-hours-chart";

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

const CrewLeaderContent: React.FC = () => {
  return (
    <Layout className="rounded-[32px] ml-6 mb-6 bg-[#F4F6F6] overflow-y-auto max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-24rem)]">
      <Content className="p-8 rounded-[32px]">
        <div className="flex justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Opportunities Won Report</p>
          <div className="flex items-center gap-2 flex-wrap">
            <Flex gap={8} className="flex-wrap" justify="flex-start">
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
            <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer w-10 h-10">
              <img src="/assets/admin/images/filter.svg" alt="" />
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
          <Col xxl={9} xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <Flex className="flex flex-col gap-2">
                <Flex justify="flex-start" align="center" gap={10}>
                  <p className="text-2xl text-[#141922]">115%</p>
                  <div className="font-semibold rounded-xl bg-[#EF6F6C] text-white px-2 py-0.5">
                    <FontAwesomeIcon icon={faArrowTrendDown} className="mr-2" />
                    30%
                  </div>
                </Flex>
                <p className="text-4xl font-semibold text-[#141922]">
                  Labor Efficiency
                </p>
                <p className="text-sm text-[#667174]">vs previous 27%</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={5} xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-left ant-card-report-padding">
              <p className="text-sm text-[#141922]">Earned Revenue / Crew</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $450,000
              </p>
              <p className="text-sm text-[#667174] pt-1">
                vs previous $475,000
              </p>
            </Card>
          </Col>
          <Col xxl={6} xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-left ant-card-report-padding">
              <p className="text-sm text-[#141922]">Gross Margin</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                52.3%
              </p>
              <p className="text-sm text-[#667174] pt-1">
                compared to 49.2% expected
              </p>
            </Card>
          </Col>
          <Col xxl={4} xl={12} lg={12} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-left ant-card-report-padding">
              <p className="text-sm text-[#141922]">Hours Variance</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                48.9%
              </p>
              <p className="text-sm text-[#667174] pt-1">vs previous period</p>
            </Card>
          </Col>

          <Col span={24} className="!p-0">
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-xl text-[#667174]">Table View</p>
                <Flex gap={8} className="flex-wrap" justify="flex-end">
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
                  >
                    <p className="text-[#141922] text-xs font-semibold">
                      Group first by
                    </p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <Select
                        size={"middle"}
                        defaultValue="Sales Rep"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Sales Rep",
                            value: 1,
                          },
                          {
                            label: "Andrew",
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
                    <p className="text-[#141922] text-xs font-semibold">
                      Then by
                    </p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <Select
                        size={"middle"}
                        defaultValue="Property"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Property",
                            value: 1,
                          },
                          {
                            label: "Property 1",
                            value: 2,
                          },
                          {
                            label: "Property 2",
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
                      Then by
                    </p>
                    <Space direction="vertical" size={12} className="pl-2">
                      <Select
                        size={"middle"}
                        defaultValue="Opportunities"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Opportunities",
                            value: 1,
                          },
                          {
                            label: "Opportunities 1",
                            value: 2,
                          },
                          {
                            label: "Opportunities 2",
                            value: 3,
                          },
                        ]}
                      />
                    </Space>
                  </Flex>
                </Flex>
              </Flex>
              <Table<CrewLeaderDataType>
                className="scrollbar"
                dataSource={CrewLeaderSources}
                columns={CrewLeaderColumns}
                pagination={false}
                scroll={{ x: "max-content", y: 65 * 5 }}
                expandable={{
                  expandIcon: ({ expanded, onExpand, record }) =>
                    expanded ? (
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        fill="#66717480"
                        className="cursor-pointer pr-2 text-[#667174]"
                        onClick={(e: any) => onExpand(record, e)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        fill="#66717480"
                        className="cursor-pointer pr-2 text-[#667174]"
                        onClick={(e: any) => onExpand(record, e)}
                      />
                    ),
                }}
              />
            </Card>
          </Col>
          <Col xl={12} lg={24} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-xl text-[#667174]">
                  Crew Leader Efficiency and Warranty Hours
                </p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>

              <div className="min-h-[400px]">
                <CrewLeaderEffAndWarrantyHoursChart />
              </div>
            </Card>
          </Col>
          <Col xl={12} lg={24} md={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <Flex justify="space-between" align="center" className="mb-4">
                <p className="text-xl text-[#667174]">
                  Crew Leader Efficiency and Revenue
                </p>
                <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer">
                  <img
                    src="/assets/admin/images/filter.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </Flex>
              <div className="min-h-[400px]">
                <CrewLeaderEfficiencyAndRevenueChart />
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CrewLeaderContent;
