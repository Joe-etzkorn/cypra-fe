import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { DatePicker, Flex, Input, Layout, Select, Space, Table } from "antd";
import { useState } from "react";
import { RequestedAccount } from "../../types/request-account";
import { RequestedAccountService } from "../../services/requested-account.service";
import { useDebounce } from "@hooks/useDebounce";
import { useAccountRequest } from "./useAccountRequest";

const { RangePicker } = DatePicker;

const { Content } = Layout;

const AccountRequestContent = () => {
  const [page, setPage] = useState<number>(1);
  const [hasUsedAspire, setHasUsedAspire] = useState<boolean>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearch = useDebounce(500, setSearchValue);
  const [rangeDate, setRangeDate] = useState<any>();
  const { columns } = useAccountRequest();

  const requestDataFormat = () => {
    if (!rangeDate || rangeDate?.length === 0) return undefined;
    return {
      requestedDateFrom: rangeDate[0].format("YYYY-MM-DD"),
      requestedDateTo: rangeDate[1].format("YYYY-MM-DD"),
    };
  };

  const requestedDate = requestDataFormat();

  const { data, isLoading } = useQuery({
    queryKey: [
      "requested-accounts",
      hasUsedAspire,
      searchValue,
      page,
      rangeDate,
    ],
    queryFn: () =>
      RequestedAccountService.getRequestedAccounts({
        page: page,
        limit: 10,
        hasUsedAspire: hasUsedAspire !== null ? hasUsedAspire : undefined,
        searchValue: searchValue,
        ...requestedDate,
      }),
  });

  const requestedAccounts: RequestedAccount[] = data?.data?.data ?? [];

  const requestAccountDataSources = requestedAccounts?.map((item) => ({
    ...item,
    key: item.id,
  }));

  return (
    <Layout className="rounded-[32px] ml-6 mb-6 bg-[#F4F6F6] overflow-y-auto max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-24rem)]">
      <Content className="p-8 rounded-[32px] size-full">
        <div className="flex flex-col md:flex-row justify-between pb-6 pl-2 flex-wrap">
          <p className="text-[32px] text-[#667174] mb-4">Account Request</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Flex justify="space-between" align="center">
              <Space.Compact className="rounded-[70px] rounded-input-header">
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="Search by email, name, company name"
                  className="w-[380px]"
                  size="large"
                  onChange={(e) => debouncedSearch(e.target.value)}
                  allowClear
                />
              </Space.Compact>
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
                  defaultValue={null}
                  onChange={(value: any) => setHasUsedAspire(value)}
                  style={{ width: 100 }}
                  options={[
                    {
                      label: "All",
                      value: null,
                    },
                    {
                      label: "Yes",
                      value: true,
                    },
                    {
                      label: "No",
                      value: false,
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
                <RangePicker
                  className="rounded-xl"
                  onChange={(value) => setRangeDate(value)}
                />
              </Space>
            </Flex>
          </div>
        </div>
        <Table<RequestedAccount>
          className="scrollbar"
          dataSource={requestAccountDataSources}
          columns={columns}
          loading={isLoading}
          pagination={{
            total: data?.data?.total,
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
