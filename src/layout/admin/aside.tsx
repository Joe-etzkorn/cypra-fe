import { Layout } from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const AdminAside: React.FC = () => {
  return (
    <Sider
      width={80}
      className="flex flex-col items-center h-full admin-aside-bg"
    >
      <div className="flex flex-col h-full">
        <div className="items-center px-4 py-6">
          <img
            src="/assets/admin/images/admin-logo.svg"
            alt=""
            height={40}
            width={40}
          />
        </div>
        <div className="flex flex-col flex-1 items-center pt-4">
          <div className="bg-[#57B2C4] rounded-3xl p-4 text-xl mb-6 cursor-pointer hover:text-blue-500">
            <img
              src="/assets/admin/images/aside-logo-1.svg"
              alt=""
              height={18}
              width={18}
            />
          </div>
          <div className="bg-white rounded-3xl p-3 text-xl mb-6 cursor-pointer hover:text-blue-500">
            <img
              src="/assets/admin/images/aside-logo-2.svg"
              alt=""
              height={18}
              width={18}
            />
          </div>
        </div>

        <div className="flex flex-col items-center pb-4">
          <SettingOutlined className="text-xl mb-6 cursor-pointer bg-white rounded-3xl p-3 hover:text-blue-500" />
          <LogoutOutlined className="text-xl cursor-pointer bg-white rounded-3xl p-3 hover:text-red-500" />
        </div>
      </div>
    </Sider>
  );
};

export default AdminAside;
