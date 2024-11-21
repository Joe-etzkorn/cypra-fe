import React from "react";
import { Layout, Card, Row, Col, Flex, Select, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Space } from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { SalesWonData, SalesWonOptions } from "./bar-chart-data";
import EarnedRevenueGrossMarginChart from "./customer-detail-earned-revenue-gross-margin";
import {
  CustomerDetailColumns,
  CustomerDetailDataType,
  CustomerDetailSources,
} from "./customer-detail-table";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);
const { Content } = Layout;

const CustomerDetailContent: React.FC = () => {
  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto w-2/3 lg:w-full">
      <Content className="p-8 rounded-[32px]">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[24px] md:text-[32px] text-[#667174]">
            Customer Detail
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
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
                  <p className="text-xl md:text-2xl text-[#141922]">$750,000</p>
                  <p className="text-3xl md:text-4xl font-semibold text-[#141922]">
                    Spend From New Customers
                  </p>
                  <p className="text-sm text-[#667174]">10% of total sales</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col xxl={4} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Upsell Rate</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                49.0%
              </p>
              <p className="text-sm text-[#667174] pt-1">vs 46% prior year</p>
            </Card>
          </Col>
          <Col xxl={4} xl={8} lg={8} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Revenue Backlog</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                $800,000
              </p>
              <p className="text-sm text-[#667174] pt-6"></p>
            </Card>
          </Col>
          <Col xxl={4} xl={8} lg={8} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Hours Backlog</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                7,532 hrs
              </p>
              <p className="text-sm text-[#667174] pt-6"></p>
            </Card>
          </Col>
          <Col xxl={4} xl={8} lg={8} md={12} sm={24} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Runway</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                48 days
              </p>
              <p className="text-sm text-[#667174] pt-6"></p>
            </Card>
          </Col>

          <Col span={24} className="flex flex-col">
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px] flex-1  xl:max-w-[100%] lg:max-w-[600px] md:max-w-[600px] xs:max-w-[400px]">
              <Flex justify="space-between" align="center" wrap>
                <p className="text-lg md:text-xl text-[#667174] whitespace-nowrap">
                  Customer Detail
                </p>
                <Flex gap={8} wrap justify="flex-end">
                  <Flex
                    justify="space-between"
                    align="center"
                    className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
                  >
                    <p className="text-[#141922] text-xs font-semibold">
                      Property
                    </p>
                    <Space
                      direction="vertical"
                      size={12}
                      className="pl-2 rounded-xl"
                    >
                      <Select
                        size={"middle"}
                        defaultValue="Joe Smith"
                        onChange={() => {}}
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Joe Smith",
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
                  <div className="rounded-full bg-[#FFFFFF] border border-[#66717480] px-3 py-[11px] cursor-pointer h-10 w-10">
                    <img
                      src="/assets/admin/images/filter.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                  </div>
                </Flex>
              </Flex>
              <Row gutter={[24, 24]} className="flex pt-5">
                <Col xxl={4} xl={12} lg={24} md={24} sm={24} xs={24}>
                  <Card className="sales-won-bg rounded-2xl shadow-lg relative min-w-[120px]">
                    <Flex className="flex-col text-white gap-4 pl-5 text-sm">
                      <div>
                        <h4>Sales Won YTD</h4>
                        <p className="font-bold text-xl">$65,804</p>
                      </div>
                      <div>
                        <h4>Enhancements</h4>
                        <p className="font-bold text-xl">$25,000</p>
                      </div>
                      <div>
                        <h4>Enhancement Ratio</h4>
                        <p className="font-bold text-xl">27.5%</p>
                      </div>
                      <div>
                        <h4>Gross Margin</h4>
                        <p className="font-bold text-xl">49.5%</p>
                      </div>
                    </Flex>
                  </Card>
                </Col>
                <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
                  <Table<CustomerDetailDataType>
                    dataSource={CustomerDetailSources}
                    columns={CustomerDetailColumns}
                    pagination={false}
                    scroll={{ x: "max-content" }}
                    summary={(pageData) => {
                      let totalRevenue = 0;
                      let totalHoursEstimated = 0;
                      let totalHoursActual = 0;
                      let totalCostsEstimateds = 0;
                      let totalCostsActuals = 0;
                      let totalWarrantyLabor = 0;

                      pageData.forEach(
                        ({
                          revenue,
                          hoursEstimated,
                          hoursActual,
                          totalCostsEstimated,
                          totalCostsActual,
                          warrantyLabor,
                        }) => {
                          totalRevenue += parseFloat(
                            revenue.replace(/[\$,]/g, "")
                          );
                          totalHoursEstimated += parseFloat(
                            hoursEstimated.replace(/[\,]/g, "")
                          );
                          totalHoursActual += parseFloat(
                            hoursActual.replace(/[\,]/g, "")
                          );
                          totalCostsEstimateds += parseFloat(
                            totalCostsEstimated.replace(/[\$,]/g, "")
                          );
                          totalCostsActuals += parseFloat(
                            totalCostsActual.replace(/[\$,]/g, "")
                          );
                          totalWarrantyLabor += parseFloat(warrantyLabor);
                        }
                      );

                      return (
                        <Table.Summary.Row>
                          <Table.Summary.Cell
                            index={1}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(totalRevenue)}
                          </Table.Summary.Cell>
                          <Table.Summary.Cell
                            index={2}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(totalHoursEstimated)}
                          </Table.Summary.Cell>
                          <Table.Summary.Cell
                            index={3}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(totalHoursActual)}
                          </Table.Summary.Cell>
                          <Table.Summary.Cell
                            index={4}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(totalCostsEstimateds)}
                          </Table.Summary.Cell>
                          <Table.Summary.Cell
                            index={5}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(totalCostsActuals)}
                          </Table.Summary.Cell>
                          <Table.Summary.Cell
                            index={6}
                            className="font-semibold"
                          >
                            {new Intl.NumberFormat("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(totalWarrantyLabor)}
                          </Table.Summary.Cell>
                        </Table.Summary.Row>
                      );
                    }}
                  />
                </Col>
                <Col xxl={10} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <div className="min-h-[400px]">
                    <EarnedRevenueGrossMarginChart />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Card className="bg-white rounded-2xl shadow-lg h-full min-h-[344px] flex-1">
              <Flex justify="space-between" align="center" wrap>
                <p className="text-lg md:text-xl text-[#667174] whitespace-nowrap">
                  Trended Customer Spend
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
              <div className="h-full rounded-lg flex items-center justify-center pt-10">
                <Bar data={SalesWonData} options={SalesWonOptions} />
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CustomerDetailContent;
