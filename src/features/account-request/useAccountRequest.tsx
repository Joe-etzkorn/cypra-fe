import { ColumnsType } from "antd/es/table";
import { RequestedAccount } from "../../types/request-account";
import { dayFormat } from "@utils/common";
import { Button, message, Space, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { RequestedAccountService } from "../../services/requested-account.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cn } from "@utils/cn";

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
      title: "OnBoarding URL",
      dataIndex: "onBoardingLink",
      align: "center",
      width: 200,
      render: (_, record) => {
        const url = `${import.meta.env.VITE_URL}/admin-setup?token=${record?.token}`

        return (
          <Space>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "text-[#007B84] cursor-pointer",
                !record.token && "cursor-not-allowed text-gray-400",
              )}
            >
              Link
            </a>
            <Tooltip title={record.token ? "Click to copy" : ""}>
              <CopyOutlined
                className={cn(
                  "text-[#007B84] cursor-pointer",
                  !record.token && "cursor-not-allowed text-gray-400",
                )}
                onClick={() => {
                  if (!record.token) return;
                  navigator.clipboard.writeText(url);
                  message.success("URL copied to clipboard");
                }}
              />
            </Tooltip>
          </Space>
        );
      },
    },
    {
      title: "",
      key: "action",
      width: 100,
      fixed: "right",
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
