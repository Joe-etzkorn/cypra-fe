import { DatePicker, Flex, Layout, Select, Space, Table } from "antd";
import {
  AccountRequestColumns,
  AccountRequestDataType,
  AccountRequestSources,
} from "./account-request-mock";
import { useState } from "react";

const { RangePicker } = DatePicker;

const { Content } = Layout;

const AccountRequestContent = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <Layout className="rounded-[32px] ml-6 mb-6 bg-[#F4F6F6] overflow-y-auto max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-24rem)]">
      <Content className="p-8 rounded-[32px] size-full">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174] mb-4">Account Request</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Flex
              justify="space-between"
              align="center"
              className="rounded-full bg-[#FFFFFF] border border-[#66717480] py-1 pr-1 pl-3 cursor-pointer"
            >
              <p className="text-[#141922] text-xs font-semibold">Company</p>
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
                      label: "A Inc.",
                      value: 2,
                    },
                    {
                      label: "B Corp.",
                      value: 3,
                    },
                    {
                      label: "C Inc.",
                      value: 4,
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
                Using Aspire
              </p>
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
                      label: "Yes",
                      value: 2,
                    },
                    {
                      label: "No",
                      value: 3,
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
              <p className="text-[#141922] text-xs font-semibold">
                Requested date
              </p>
              <Space direction="vertical" size={12} className="pl-2">
                <RangePicker className="rounded-xl" />
              </Space>
            </Flex>
          </div>
        </div>
        <Table<AccountRequestDataType>
          className="scrollbar"
          dataSource={AccountRequestSources}
          columns={AccountRequestColumns}
          pagination={{
            total: AccountRequestSources.length,
            defaultPageSize: 10,
            hideOnSinglePage: true,
            onChange: (page) => setPage(page),
            current: page,
          }}
          scroll={{ x: "max-content" }}
        />
      </Content>
    </Layout>
  );
};

export default AccountRequestContent;
