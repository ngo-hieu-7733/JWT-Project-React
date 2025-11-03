import axios from 'axios';

const createUserApi = (name, email, password) => {
    const URL = `http://localhost:8080/v1/api/register`;
    const data = {
        name,
        email,
        password,
    };

    console.log('>>> createUserApi running...');

    return axios.post(URL, data);
};

export { createUserApi };
