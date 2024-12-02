import { ColumnsType } from "antd/es/table";
import { RequestedAccount } from "../../types/request-account";
import { dayFormat } from "@utils/common";
import { Button, message, Space } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { RequestedAccountService } from "../../services/requested-account.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//only using for account request
export const useAccountRequest = () => {
  const { mutate: generateToken, isPending } = useMutation({
    mutationFn: RequestedAccountService.generateAccountReqToken,
  });
  const queryClient = useQueryClient();

  const handleGenerateToken = (id: number) => {
    if (!id) return;

    generateToken(id, {
      onSuccess: () => {
        message.success("Approved account successfully");
        queryClient.invalidateQueries({
          queryKey: ["requested-accounts"],
        });
      },
      onError: () => {
        message.error("Approved account failed");
      },
    });
  };

  const columns: ColumnsType<RequestedAccount> = [
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
      dataIndex: "comments",
      key: "comments",
      width: 250,
    },
    {
      title: "Requested date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,
      render: (value) => dayFormat(value),
    },
    {
      title: "Using Aspire",
      dataIndex: "hasUsedAspire",
      key: "hasUsedAspire",
      align: "center",
      render: (value) =>
        value ? (
          <CheckCircleOutlined className="text-[#59C9A5] text-2xl" />
        ) : (
          <CloseCircleOutlined className="text-[#EF6F6C] text-2xl" />
        ),
      width: 150,
    },
    {
      title: "",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button danger disabled={record.hasExistedAccount || !!record.token}>
            Reject
          </Button>
          <Button
            disabled={record.hasExistedAccount || !!record.token}
            onClick={() => handleGenerateToken(record.id)}
            loading={isPending}
          >
            Approve
          </Button>
        </Space>
      ),
    },
  ];

  return { columns };
};
