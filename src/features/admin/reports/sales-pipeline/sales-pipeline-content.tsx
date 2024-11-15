import React from "react";
import { Layout, Card, Row, Col, Flex, Table, Select, DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faDownload,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { Space } from "antd";
import { Doughnut } from "react-chartjs-2";
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
import { ColumnsType } from "antd/es/table";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);
const { Content } = Layout;
const { Column } = Table;

interface BiddingDataType {
  key: React.Key;
  property: string;
  division: string;
  name: string;
  estHrs: number;
  estProfit: string;
}

const biddingSource: BiddingDataType[] = [
  {
    key: 1,
    property: "Williams",
    division: "Construction",
    name: "Front Lawn",
    estHrs: 43,
    estProfit: "$1,200,000",
  },
  {
    key: 2,
    property: "Cheyenne",
    division: "Landscape",
    name: "Garden Edging",
    estHrs: 24,
    estProfit: "$988,000",
  },
  {
    key: 3,
    property: "Dawson",
    division: "Construction",
    name: "Deck Staircase",
    estHrs: 47,
    estProfit: "$765,300",
  },
  {
    key: 4,
    property: "Williams",
    division: "Construction",
    name: "Poolhouse",
    estHrs: 48,
    estProfit: "$703,000",
  },
  {
    key: 5,
    property: "Goodhue",
    division: "Landscape",
    name: "Sidewalk",
    estHrs: 30,
    estProfit: "$522,000",
  },
  {
    key: 6,
    property: "Goodhue",
    division: "Landscape",
    name: "Sidewalk",
    estHrs: 30,
    estProfit: "$522,000",
  },
];

const biddingColumns: ColumnsType<BiddingDataType> = [
  { title: "Property", dataIndex: "property", key: "property" },
  { title: "Division", dataIndex: "division", key: "division" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Est. Hrs.", dataIndex: "estHrs", key: "estHrs" },
  { title: "Est. Profit", dataIndex: "estProfit", key: "estProfit" },
  {
    title: "",
    key: "action",
    render: (_: any, _record: BiddingDataType) => (
      <Space size="middle">
        <a className="text-[#57B2C4]">Copy id</a>
      </Space>
    ),
  },
];

interface DeliveredDataType {
  key: React.Key;
  age: string;
  property: string;
  division: string;
  name: string;
  estHrs: number;
  estProfit: string;
}

const deliveredSource: DeliveredDataType[] = [
  {
    key: 1,
    age: "1D",
    property: "Williams",
    division: "Construction",
    name: "Sidewalk",
    estHrs: 43,
    estProfit: "$1,200,000",
  },
  {
    key: 2,
    age: "1D",
    property: "Goodhue",
    division: "Landscape",
    name: "Front Lawn",
    estHrs: 24,
    estProfit: "$988,000",
  },
  {
    key: 3,
    age: "2D",
    property: "Cheyenne",
    division: "Landscape",
    name: "Front Lawn",
    estHrs: 47,
    estProfit: "$765,300",
  },
  {
    key: 4,
    age: "2D",
    property: "Dawson",
    division: "Construction",
    name: "Garden Edging",
    estHrs: 48,
    estProfit: "$703,000",
  },
  {
    key: 5,
    age: "2D",
    property: "Dawson",
    division: "Construction",
    name: "Deck Staircase",
    estHrs: 48,
    estProfit: "$703,000",
  },
  {
    key: 6,
    age: "3D",
    property: "Williams",
    division: "Landscape",
    name: "Poolhouse",
    estHrs: 30,
    estProfit: "$522,000",
  },
  {
    key: 7,
    age: "3D",
    property: "Goodhue",
    division: "Construction",
    name: "Sidewalk",
    estHrs: 30,
    estProfit: "$522,000",
  },
];

const deliveredColumns: ColumnsType<DeliveredDataType> = [
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render: (age: string) => (
      <span className={age === "3D" ? "text-red-500" : ""}>{age}</span>
    ),
  },
  { title: "Property", dataIndex: "property", key: "property" },
  { title: "Division", dataIndex: "division", key: "division" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Est. Hrs.", dataIndex: "estHrs", key: "estHrs" },
  { title: "Est. Profit", dataIndex: "estProfit", key: "estProfit" },
  {
    title: "",
    key: "action",
    render: () => (
      <Space size="middle">
        <a className="text-[#57B2C4]">Copy id</a>
      </Space>
    ),
  },
];

interface OpportunityDataType {
  key: React.Key;
  status: string;
  date: string;
  property: string;
  division: string;
  name: string;
  estHrs: number;
  estProfit: string;
}

const opportunitiesSource: OpportunityDataType[] = [
  {
    key: 1,
    status: "Won",
    date: "10/21/24",
    property: "Williams",
    division: "Boston",
    name: "Front Lawn",
    estHrs: 43,
    estProfit: "$1,200,000",
  },
  {
    key: 2,
    status: "Won",
    date: "10/22/24",
    property: "Cheyenne",
    division: "Denver",
    name: "Garden Edging",
    estHrs: 24,
    estProfit: "$988,000",
  },
  {
    key: 3,
    status: "Lost",
    date: "10/22/24",
    property: "Dawson",
    division: "Boston",
    name: "Deck Staircase",
    estHrs: 47,
    estProfit: "$765,300",
  },
  {
    key: 4,
    status: "Lost",
    date: "10/22/24",
    property: "Williams",
    division: "Boston",
    name: "Poolhouse",
    estHrs: 48,
    estProfit: "$703,000",
  },
  {
    key: 5,
    status: "Won",
    date: "10/23/24",
    property: "Goodhue",
    division: "DC",
    name: "Sidewalk",
    estHrs: 30,
    estProfit: "$522,000",
  },
  {
    key: 6,
    status: "Lost",
    date: "10/23/24",
    property: "Goodhue",
    division: "DC",
    name: "Sidewalk",
    estHrs: 30,
    estProfit: "$522,000",
  },
];

const opportunitiesColumns: ColumnsType<OpportunityDataType> = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span className={status === "Won" ? "text-green-500" : "text-red-500"}>
        {status}
      </span>
    ),
  },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Property", dataIndex: "property", key: "property" },
  { title: "Division", dataIndex: "division", key: "division" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Est. Hours", dataIndex: "estHrs", key: "estHrs" },
  { title: "Est. Profit", dataIndex: "estProfit", key: "estProfit" },
];

const { RangePicker } = DatePicker;

const SalesPipelineContent: React.FC = () => {
  return (
    <Layout className="rounded-[32px] mx-6 mb-6 bg-[#F4F6F6] overflow-y-auto">
      <Content className="p-8 rounded-[32px]">
        <div className="flex justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174]">Sales Pipeline Report</p>
          <div className="flex items-center gap-2">
            <Flex gap={8} className="flex-wrap" justify="flex-end">
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
          <Col xl={6} lg={12} md={12} xs={24}>
            <Card className="bg-[#F4F6F6] border-none ant-card-custom-padding">
              <div className="flex flex-col gap-1">
                <p className="text-[40px] leading-[48px] font-semibold text-[#141922]">
                  14
                </p>
                <p className="text-xl font-semibold text-[#141922]">
                  Pending Opportunities
                </p>
                <p className="text-sm text-[#667174]">
                  $42,000 estimated dollars
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={4} lg={6} md={6} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Opportunities Bidding</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">6</p>
            </Card>
          </Col>
          <Col xl={4} lg={6} md={6} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg sales-pipeline-border text-center border-[#57B2C4]">
              <p className="text-sm text-[#141922]">Opportunities Delivered</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">8</p>
            </Card>
          </Col>
          <Col xl={5} lg={12} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Most Active Division</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                Construction
              </p>
              <p className="text-sm text-[#667174] pt-1">
                With $3,668,300 sales pending{" "}
              </p>
            </Card>
          </Col>
          <Col xl={5} lg={12} md={12} xs={24}>
            <Card className="bg-white rounded-2xl shadow-lg">
              <p className="text-sm text-[#141922]">Average Sales Cycle</p>
              <p className="text-2xl font-semibold text-[#141922] pt-1">
                6.3 <span className="text-[#667174]">Days</span>
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
              <Table<BiddingDataType>
                dataSource={biddingSource}
                columns={biddingColumns}
                pagination={false}
                scroll={{ x: "max-content" }}
                summary={(pageData) => {
                  let totalEstHrs = 0;
                  let totalEstProfit = 0;

                  pageData.forEach(({ estHrs, estProfit }) => {
                    totalEstHrs += estHrs;
                    totalEstProfit += parseFloat(
                      estProfit.replace(/[\$,]/g, "")
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
                        {totalEstHrs}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} className="font-semibold">
                        ${totalEstProfit.toLocaleString()}
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
              <Table<DeliveredDataType>
                dataSource={deliveredSource}
                columns={deliveredColumns}
                pagination={false}
                scroll={{ x: "max-content" }}
                summary={(pageData) => {
                  let totalEstHrs = 0;
                  let totalEstProfit = 0;

                  pageData.forEach(({ estHrs, estProfit }) => {
                    totalEstHrs += estHrs;
                    totalEstProfit += parseFloat(
                      estProfit.replace(/[\$,]/g, "")
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
                        {totalEstHrs}
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} className="font-semibold">
                        ${totalEstProfit.toLocaleString()}
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
              <Row gutter={[24, 24]} className="mt-6">
                <Col span={8}>
                  <Flex justify="flex-end" align="center" className="flex-col">
                    <div className="rounded-lg flex items-center justify-center 2xl:h-[450px] xl:h-[250px] lg:h-[424px] relative">
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                      <p className="text-[#141922] text-[40px] font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        55%
                        <p className="text-[#667174] text-xl text-center">
                          Won
                        </p>
                      </p>
                    </div>
                    <p className="text-[#667174] mt-6">
                      of past <strong>19</strong> opportunities
                    </p>
                    <p className="text-[#667174]">
                      from <strong>Sep 21</strong> to <strong>Oct 21</strong>
                    </p>
                  </Flex>
                </Col>
                <Col xl={16} lg={16} md={24} xs={24}>
                  <Table<OpportunityDataType>
                    dataSource={opportunitiesSource}
                    columns={opportunitiesColumns}
                    pagination={false}
                    scroll={{ x: "max-content" }}
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
