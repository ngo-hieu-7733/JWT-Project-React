import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../util/api";

const UserPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers()
            if (users) {
                setData(users)
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
