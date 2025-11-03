import React, { useState } from 'react';
import {
    HeartFilled,
    HomeFilled,
    LoginOutlined,
    LogoutOutlined,
    RocketFilled,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeFilled />,
        },
        {
            label: <Link to={'/user'}>User</Link>,
            key: 'user',
            icon: <HeartFilled />,
        },
        {
            label: 'Welcome danchoi',
            key: 'SubMenu',
            icon: <RocketFilled />,
            children: [
                {
                    label: <Link to={'/login'}>Log In</Link>,
                    key: 'login',
                    icon: <LoginOutlined />,
                },
                {
                    label: 'Log Out',
                    key: 'logout',
                    icon: <LogoutOutlined />,
                },
            ],
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
