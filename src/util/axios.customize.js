import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

// Alter defaults after instance has been created

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        console.log('>>> CHECK set token');
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            'access_token',
        )}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response?.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('>>> check err: ', error);

        if (error?.response?.data) return error?.response?.data;

        return Promise.reject(error);
    },
);

export default instance;
