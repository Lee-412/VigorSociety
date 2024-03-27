import { Button, Menu, MenuProps } from 'antd';
import './App.scss'
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Trang Chủ</Link>,
    key: 'introduction',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to='/Follow'>Theo Dõi</Link >,
    key: 'follow',
    icon: <TeamOutlined />,
    disabled: false,
  },
  {
    label: <Link to='/Achive'>Thành Tựu</Link >,
    key: 'achievement',
    icon: <TeamOutlined />,
    disabled: false,
  },
  {
    label: <Link to='/Advise'>Tư vấn và hỗ trợ sức khỏe</Link >,
    key: 'Advise',
    icon: <TeamOutlined />,
    disabled: false,
  },
  {
    label: <Link to='/Information'>Thông tin và kiến thức</Link >,
    key: 'information_knowledge',
    icon: <TeamOutlined />,
    disabled: false,
  },
  {
    label: <Link to='/Support'>Hỗ trợ</Link >,
    key: 'support',
    icon: <TeamOutlined />,
    disabled: false,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal" items={items} />
    </div>
  )
};

function App() {

  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App



