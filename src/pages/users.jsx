import { notification, Table } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../util/api";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const [data, setData] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers()

                if (!users?.message) {
                    setData(users)
                } else {
                    notification.error({
                        message: "Unauthorized",
                        description: users.message
                    })
                    setTimeout(() => {
                        nav('/login')  
                    }, 500);                  
                }
            } catch (error) {
                console.log('>>> check users error', error)
            }
        }
        fetchUsers()
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];

    return (
        <>
            <Table dataSource={data} columns={columns} rowKey={"_id"}/>;
        </>
    );
};

export default UserPage;
