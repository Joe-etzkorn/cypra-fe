import React from "react";
import { Layout, Card, Row, Col, Flex, Select, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  ServicesReportColumns,
  ServicesReportDataType,
} from "./services-report-table";
import { useServiceReport } from "./use-service-report";

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

const ServicesReportContent: React.FC = () => {
  const { dataSource, isLoading } = useServiceReport();

  return (
    <Layout className="rounded-[32px] ml-6 mb-6 bg-[#F4F6F6] overflow-y-auto max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-24rem)]">
      <Content className="p-8 rounded-[32px]">
        <div className="flex justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Services Report</p>
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
        <Row gutter={[24, 24]} className="flex items-center pb-4">
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
                        defaultValue="Services"
                        onChange={() => {}}
                        disabled
                        style={{ width: 100 }}
                        options={[
                          {
                            label: "Services",
                            value: 1,
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
              <Table<ServicesReportDataType>
                className="scrollbar"
                dataSource={dataSource}
                columns={ServicesReportColumns}
                loading={isLoading}
                pagination={false}
                scroll={{ x: "max-content" }}
                expandable={{
                  expandIcon: ({ expanded, onExpand, record }) => {
                    if (record?.children && record?.children?.length > 0)
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

export default ServicesReportContent;
