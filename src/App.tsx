import { Avatar, Badge, Button, Menu, MenuProps, Space } from 'antd';
import './App.scss'
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AntDesignOutlined, HomeOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

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
    <>
      {/* <div style={{
        display: "flex"
      }}>
        <Avatar
          // size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />
      </div> */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'centers',
        alignContent: "center",

      }}>
        <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <Menu onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal" items={items}
          style={{
            marginRight: "300px",
            marginLeft: "15px"
          }} />
        <div
          style={{
            textAlign: 'center'
          }}
        >
          {/* <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" /> */}
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
          <br />
          <span style={{ textAlign: 'center', alignContent: "center", marginLeft: "10px" }}> UserName</span>
        </div>
      </div>
    </>
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



