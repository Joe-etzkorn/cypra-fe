import { cn } from "@utils/cn"
import { Modal } from "antd"
import React, { useState } from "react"
import APIIntegration from "./api-integration"
import "./index.css"
import Organization from "./organization"
import Profile from "./profile"
import Subscription from "./subscription"

interface SettingModalProps {
  isModalVisible: boolean
  handleOk: () => void
  handleCancel: () => void
}

const SettingModal: React.FC<SettingModalProps> = ({
  isModalVisible,
  handleOk,
  handleCancel,
}) => {
  const [activeTab, setActiveTab] = useState("profile")

  const renderTab = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />
      case "organization":
        return <Organization />
      case "apiIntegration":
        return <APIIntegration />
      case "subscription":
        return <Subscription />
      default:
        return null
    }
  }

  const tabItems = [
    { key: "profile", label: "Profile" },
    { key: "organization", label: "Organization" },
    { key: "apiIntegration", label: "API Integration" },
    { key: "subscription", label: "Subscription" },
  ]

  const renderTabItem = (key: string, label: string) => (
    <div
      className={cn(
        "py-1 hover:text-[#57B2C4] cursor-pointer text-lg font-semi",
        activeTab === key && "text-[#57B2C4]",
      )}
      onClick={() => setActiveTab(key)}
    >
      {label}
    </div>
  )

  return (
    <Modal
      open={isModalVisible}
      onOk={handleOk}
      closeIcon={null}
      onCancel={handleCancel}
      width={800}
      footer={null}
    >
      <div className="flex min-h-[400px]">
        <div className="bg-gray-100 rounded-tl-3xl rounded-bl-3xl px-6 py-4 flex flex-col justify-between w-[245px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="text-2xl font-bold py-2">Settings</div>
              <div>
                {tabItems.map((item) => renderTabItem(item.key, item.label))}
              </div>
            </div>
            <div
              className="text-lg font-semi text-gray-500 cursor-pointer"
              onClick={handleCancel}
            >
              Return
            </div>
          </div>
        </div>
        <div className="w-full h-ful">{renderTab()}</div>
      </div>
    </Modal>
  )
}

export default SettingModal
