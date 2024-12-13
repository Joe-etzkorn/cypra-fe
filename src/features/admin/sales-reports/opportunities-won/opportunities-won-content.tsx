import DashboardSkeleton from "@components/dashboard-skeleton";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCaretDown,
  faCaretRight,
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
import { OpportunitiesColumns } from "./opportunities-table";
import { useOpportunitiesWon } from "./use-opponutunities-won";
import { OpportunitiesWonTable } from "../../../../types/oppotunity-won";

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

const OpportunitiesWonContent: React.FC = () => {
  const { opportunitiesWonData, dataSources, isLoading, tableLoading } =
    useOpportunitiesWon();

  return (
    <Layout className="rounded-[32px] ml-6 mb-6 bg-[#F4F6F6] overflow-y-auto max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-24rem)]">
      <Content className="p-8 rounded-[32px]">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[24px] md:text-[32px] text-[#667174]">
            Opportunities Won Report
          </p>
          <div className="flex items-center gap-2 flex-wrap">
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
        <Row gutter={[16, 16]} className="flex items-center pb-4">
          <Col xxl={7} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <Flex className="flex flex-col gap-2">
                <Flex justify="flex-start" align="center" gap={10}>
                  <p className="text-2xl text-[#141922]">
                    <DashboardSkeleton loading={isLoading}>
                      {currencyFormat(
                        opportunitiesWonData?.common?.count?.toFixed(0),
                      ) || 0}
                    </DashboardSkeleton>
                  </p>
                  <div className="font-semibold rounded-xl bg-[#59C9A5] text-white px-2 py-0.5">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="mr-2" />
                    30%
                  </div>
                </Flex>
                <p className="text-4xl font-semibold text-[#141922]">
                  Opportunities Won
                </p>
                <p className="text-sm text-[#667174]">vs previous 17</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={5} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-left ant-card-report-padding">
              <p className="text-sm text-[#141922]">Estimated Revenue</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $
                <DashboardSkeleton loading={isLoading}>
                  {currencyFormat(
                    opportunitiesWonData?.estimatedRevenue?.total?.toFixed(2) ||
                      0,
                  )}
                </DashboardSkeleton>
              </p>
              <Flex
                justify="flex-start"
                align="center"
                className="flex-wrap pt-1"
                gap={5}
              >
                <FontAwesomeIcon
                  icon={faArrowTrendDown}
                  className="text-[#EF6F6C]"
                />
                <p className="text-[#EF6F6C]">11%</p>
                <p className="text-[#667174]">vs previous period</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={5} xl={8} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-left ant-card-report-padding">
              <p className="text-sm text-[#141922]">Estimated Gross Profit</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $
                <DashboardSkeleton loading={isLoading}>
                  {currencyFormat(
                    opportunitiesWonData?.estimatedGrossProfit?.total?.toFixed(
                      2,
                    ) || 0,
                  )}
                </DashboardSkeleton>
              </p>
              <Flex
                justify="flex-start"
                align="center"
                className="flex-wrap pt-1"
                gap={5}
              >
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-[#59C9A5]"
                />
                <p className="text-[#59C9A5]">11%</p>
                <p className="text-[#667174]">vs previous period</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={3} xl={8} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4] ant-card-report-padding">
              <p className="text-sm text-[#141922]">Estimated Gross Margin</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {opportunitiesWonData?.estimatedGrossMarin?.count?.toFixed(
                    2,
                  ) || 0}
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
                  icon={faArrowTrendUp}
                  className="text-[#59C9A5]"
                />
                <p className="text-[#59C9A5]">11%</p>
              </Flex>
            </Card>
          </Col>
          <Col xxl={4} xl={8} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4] ant-card-report-padding">
              <p className="text-sm text-[#141922]">Estimated Hours</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                <DashboardSkeleton loading={isLoading}>
                  {opportunitiesWonData?.estimatedHours?.total?.toFixed(2) || 0}
                </DashboardSkeleton>
              </p>
              <Flex
                justify="center"
                align="center"
                className="flex-wrap pt-1"
                gap={5}
              >
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-[#59C9A5]"
                />
                <p className="text-[#59C9A5]">11%</p>
              </Flex>
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
                </Flex>
              </Flex>{" "}
              <Table<OpportunitiesWonTable>
                dataSource={dataSources}
                columns={OpportunitiesColumns}
                pagination={false}
                loading={tableLoading}
                scroll={{ x: "max-content" }}
                expandable={{
                  expandIcon: ({ expanded, onExpand, record }) => {
                    if (record.children?.length) {
                      return expanded ? (
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
                      );
                    }
                    return null;
                  },
                }}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default OpportunitiesWonContent;
