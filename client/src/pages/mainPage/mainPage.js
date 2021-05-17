import React from 'react';
import getData from '../../utils/get_data_function';

import './mainPage.css';

const MainPage = () => {

    const [spinner, setSpinner] = React.useState(true);
    const [hostData, setHostData] = React.useState([]);


    const pullData = async () => {
        try {
            let respone = await getData('http://127.0.0.1:8000/api/airBnb/hosts/getAllHosts');
            if (respone) {
                setSpinner(false)
            }
            setHostData(respone);
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        pullData();
    }, []);

    return (
        <div className='main-page-cont'>
            <div className='header-image'></div>
        </div>
    );
};

export default MainPage;