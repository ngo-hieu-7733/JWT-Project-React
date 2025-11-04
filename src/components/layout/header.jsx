import React, { useState } from 'react';
import {
    HeartFilled,
    HomeFilled,
    LoginOutlined,
    LogoutOutlined,
    RocketFilled,
} from '@ant-design/icons';
import { Menu, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate()
    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeFilled />,
        },
        {
            label: <Link to={'/users'}>Users</Link>,
            key: 'users',
            icon: <HeartFilled />,
        },
        {
            label: 'Welcome danchoi',
            key: 'SubMenu',
            icon: <RocketFilled />,
            children: localStorage.getItem('access_token') ? [{
                label: <span onClick={() => {
                    localStorage.clear('access_token')
                    notification.success({
                        message: "Log out successfully",
                        description: "Dang xuat thanh cong!"
                    })
                    nav('/')
                }}>Log Out</span>,
                key: 'logout',
                icon: <LogoutOutlined />,
            }] :
            [{
                label: <Link to={'/login'}>Log In</Link>,
                key: 'login',
                icon: <LoginOutlined />,
            }]
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </>
    );
};
export default Header;
