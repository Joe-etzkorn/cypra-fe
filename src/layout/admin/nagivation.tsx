import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminNavigation: React.FC = () => {
  return (
    <Sider className='h-screen mt-20 bg-[#E1EBEB]'>
      <Menu mode="inline">
        <Menu.Item key="sales">
          <span>Sales</span>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <span>Dashboard</span>
        </Menu.Item>
        <SubMenu key="reports" title="Reports">
          <Menu.Item key="opportunities-won">Opportunities Won</Menu.Item>
          <Menu.Item key="sales-pipeline-report">Sales Pipeline Report</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AdminNavigation;