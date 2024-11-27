import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";

export interface AccountRequestDataType {
  key: number;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  comment: string;
  isUseAspire: boolean;
  createdAt: string;
}

const AccountRequestSources: AccountRequestDataType[] = [
  {
    key: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    companyName: "A Inc.",
    comment: "I need help with my landscaping project.",
    isUseAspire: true,
    createdAt: "2024-01-01",
  },
  {
    key: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "123-456-7890",
    companyName: "B Corp.",
    comment: "I need help with my landscaping project.",
    isUseAspire: false,
    createdAt: "2024-01-01",
  },
  {
    key: 3,
    name: "Mark Doe",
    email: "mark.doe@example.com",
    phone: "123-456-7890",
    companyName: "C Inc.",
    comment: "I need help with my landscaping project.",
    isUseAspire: true,
    createdAt: "2024-01-01",
  },
  {
    key: 4,
    name: "Jack Doe",
    email: "jack.doe@example.com",
    phone: "123-456-7890",
    companyName: "A Inc.",
    comment: "I need help with my landscaping project.",
    isUseAspire: true,
    createdAt: "2024-01-01",
  },
  {
    key: 5,
    name: "Jill Doe",
    email: "jill.doe@example.com",
    phone: "123-456-7890",
    companyName: "B Corp.",
    comment: "I need help with my landscaping project.",
    isUseAspire: false,
    createdAt: "2024-01-01",
  },
  {
    key: 6,
    name: "Jake Doe",
    email: "jake.doe@example.com",
    phone: "123-456-7890",
    companyName: "A Inc.",
    comment: "I need help with my landscaping project.",
    isUseAspire: true,
    createdAt: "2024-01-01",
  },
  {
    key: 7,
    name: "Jill Doe",
    email: "jill.doe@example.com",
    phone: "123-456-7890",
    companyName: "A Inc.",
    comment: "I need help with my landscaping project.",
    isUseAspire: false,
    createdAt: "2024-01-01",
  },
];

const AccountRequestColumns: ColumnsType<AccountRequestDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
    width: 200,
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    width: 200,
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "comment",
    width: 250,
  },
  {
    title: "Requested date",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 200,
  },
  {
    title: "Using Aspire",
    dataIndex: "isUseAspire",
    key: "isUseAspire",
    render: (value) => (value ? "Yes" : "No"),
    width: 150,
  },
  {
    title: "",
    key: "action",
    width: 100,
    render: () => (
      <Space size="middle">
        <Button>Approve</Button>
        <Button danger>Reject</Button>
      </Space>
    ),
  },
];

export { AccountRequestSources, AccountRequestColumns };
