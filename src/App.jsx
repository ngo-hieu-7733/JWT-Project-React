import { useEffect } from 'react';
import axios from './util/axios.customize';
import Header from './components/layout/header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`/v1/api/`);
    //             console.log('>>> Check res: ', res);
    //         } catch (error) {
    //             console.log('>>> ERR Home Page: ', error)            
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
