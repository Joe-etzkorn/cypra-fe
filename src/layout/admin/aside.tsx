import { LogoutOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import SettingModal from "../../components/setting-modal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMenuLayout } from "../../stores/menu-layout";
import { COOKIE_ITEM } from "@constants/common";
import Cookies from "js-cookie";

const { Sider } = Layout;

const AdminAside: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {toggleOpenMenuLayout } = useMenuLayout();

  const handleClick = (key: string) => {
    navigate(key);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onLogout = () => {
    Cookies.remove(COOKIE_ITEM.ACCESS_TOKEN)
    navigate("/signin")
  }

  return (
    <Sider
      width={80}
      className="flex flex-col items-center h-full admin-aside-bg"
    >
      <div className="flex flex-col h-full">
        <div className="items-center p-4 block lg:hidden">
          <MenuOutlined
            className="text-xl cursor-pointer bg-white rounded-3xl p-3 hover:text-blue-500"
            onClick={() => toggleOpenMenuLayout(true)}
          />
        </div>
        <div className="items-center px-4 py-6">
          <img
            src="/assets/admin/images/admin-logo.svg"
            alt=""
            height={40}
            width={40}
          />
        </div>
        <div className="flex flex-col flex-1 items-center pt-4">
          <div
            className={`${
              location.pathname.includes("/admin-sales")
                ? "bg-[#57B2C4] p-4"
                : "bg-white p-3"
            } rounded-3xl text-xl mb-6 cursor-pointer`}
            onClick={() => handleClick("/admin-sales/dashboard")}
          >
            <img
              src="/assets/admin/images/aside-logo-1.svg"
              alt=""
              height={18}
              width={18}
              className="text-[#000000]"
            />
          </div>
          <div
            className={`${
              location.pathname.includes("/admin-operations")
                ? "bg-[#57B2C4] p-4"
                : "bg-white p-3"
            } rounded-3xl text-xl mb-6 cursor-pointer`}
            onClick={() => handleClick("/admin-operations/dashboard")}
          >
            <img
              src="/assets/admin/images/aside-logo-2.svg"
              alt=""
              height={18}
              width={18}
            />
          </div>
        </div>

        <div className="flex flex-col items-center pb-4">
          <SettingOutlined
            className="text-xl mb-6 cursor-pointer bg-white rounded-3xl p-3 hover:text-blue-500"
            onClick={showModal}
          />
          <LogoutOutlined
            className="text-xl cursor-pointer bg-white rounded-3xl p-3 hover:text-red-500"
            onClick={onLogout}
          />
        </div>
      </div>
      <SettingModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Sider>
  )
};

export default AdminAside;
