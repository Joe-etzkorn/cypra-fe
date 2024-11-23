import { Avatar, Button, Form, Input, message } from "antd"
import { useState } from "react"
import FieldItem from "./field-item"
import { cn } from "@utils/cn"
import { useFormErrorHandler } from "@hooks/useFormErrorHandler"
import DisplayErrorMessages from "@layout/common-ui/displayErrorMessages"
import { randomColor } from "@utils/common"
import { useNavigate } from "react-router-dom"

interface OrganizationInfo {
  firstName: string
  lastName: string
  email: string
  role: string
}

const OrganizationAction = ({
  initialValues,
  onChangeInfo,
  onClose,
  isInvite = false,
}: {
  onChangeInfo: (info: OrganizationInfo, isDelete?: boolean) => void
  onClose: () => void
  initialValues?: OrganizationInfo
  isInvite?: boolean
}) => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { formErrors, onFinishFailed, handleFieldsChange } =
    useFormErrorHandler()

  const onSaveChanges = (values: OrganizationInfo, isDelete?: boolean) => {
    onChangeInfo({ ...initialValues, ...values }, isDelete)
    onClose()
    message.success("Successfully")
    form.resetFields()
    if (isInvite) {
      navigate("/admin-sales/dashboard")
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSaveChanges}
      initialValues={initialValues}
      className="h-full flex flex-col justify-between"
      onFieldsChange={handleFieldsChange}
      onFinishFailed={onFinishFailed}
    >
      <div className="h-full w-fit">
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "First Name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Last Name is required" }]}
          >
            <Input />
          </Form.Item>
        </div>

        {isInvite ? (
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input className="!max-w-[360px]" />
          </Form.Item>
        ) : (
          <FieldItem
            label="Email"
            value={initialValues?.email || ""}
            className="py-0"
          />
        )}
      </div>
      {formErrors.length > 0 && (
        <DisplayErrorMessages formErrors={formErrors} />
      )}
      <div
        className={cn(
          "flex justify-end gap-4 px-2 md:px-6",
          !isInvite && "flex-col md:flex-row py-2 md:py-0",
        )}
      >
        <Button onClick={onClose} className="!bg-[#F4F6F6]">
          Cancel
        </Button>
        {!isInvite && (
          <Button
            onClick={() =>
              onSaveChanges({ ...initialValues } as OrganizationInfo, true)
            }
            danger
            className="!bg-[#EF6F6C] text-white hover:!text-white"
          >
            Delete
          </Button>
        )}
        <Button type="primary" htmlType="submit">
          {isInvite ? "Invite user" : "Save Changes"}
        </Button>
      </div>
    </Form>
  )
}

const Organization = () => {
  const mockData = [
    {
      firstName: "Henry",
      lastName: "Waill",
      role: "Admin",
      email: "henry@henrywaill.com",
    },
    {
      firstName: "John",
      lastName: "Egan",
      role: "Member",
      email: "john@johnegan.com",
    },
    {
      firstName: "John",
      lastName: "Egan",
      role: "Member",
      email: "john@johnegan.com",
    },
    {
      firstName: "Henry",
      lastName: "Waill",
      role: "Member",
      email: "henry@henrywaill.com",
    },
    {
      firstName: "John",
      lastName: "Egan",
      role: "Member",
      email: "john@johnegan.com",
    },
    {
      firstName: "Henry",
      lastName: "Waill",
      role: "Member",
      email: "henry@henrywaill.com",
    },
  ]

  const [action, setAction] = useState<"invite" | "edit">()
  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfo[]>(mockData)
  const [accountInfo, setAccountInfo] = useState<OrganizationInfo>()

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
  }

  const handleEdit = (info: OrganizationInfo) => {
    setOrganizationInfo((prev) => {
      const index = prev.findIndex((m) => m.email === info.email)
      if (index !== -1) {
        const updatedInfo = [...prev]
        updatedInfo[index] = { ...prev[index], ...info }
        return updatedInfo
      }
      return prev
    })
  }

  const handleDelete = (info: OrganizationInfo) => {
    setOrganizationInfo((prev) => prev.filter((m) => m.email !== info.email))
  }

  const handleInvite = (info: OrganizationInfo) => {
    setOrganizationInfo((prev) => [...prev, info])
  }

  const renderContent = () => {
    if (action === "edit") {
      return (
        <OrganizationAction
          initialValues={accountInfo}
          onChangeInfo={(info, isDelete) => {
            handleEdit(info)
            if (isDelete) {
              handleDelete(info)
            }
          }}
          onClose={() => setAction(undefined)}
        />
      )
    }

    return (
      <OrganizationAction
        onChangeInfo={handleInvite}
        onClose={() => setAction(undefined)}
        isInvite={true}
      />
    )
  }

  return (
    <div className="px-2 md:px-6 py-4 h-full flex flex-col">
      <div className="text-2xl font-bold py-2">G&G Landscape</div>
      {action === undefined ? (
        <>
          <div className="h-full">
            <div className="py-1">Team Members</div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {organizationInfo.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md p-2"
                  onClick={() => {
                    setAccountInfo(member)
                    setAction("edit")
                  }}
                >
                  <Avatar style={{ backgroundColor: randomColor() }}>
                    {getInitials(`${member.firstName} ${member.lastName}`)}
                  </Avatar>
                  <div>
                    <div className="text-lg font-semi line-clamp-1">
                      {member.firstName} {member.lastName}{" "}
                      {member.role === "Admin" ? "(me)" : ""}
                    </div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-4 px-2 md:px-6">
            <Button
              onClick={() => setAction("invite")}
              className="!bg-[#F4F6F6]"
            >
              Invite Member
            </Button>
          </div>
        </>
      ) : (
        <div className="h-full">{renderContent()}</div>
      )}
    </div>
  )
}

export default Organization
