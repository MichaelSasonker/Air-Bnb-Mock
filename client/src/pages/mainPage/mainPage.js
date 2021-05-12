import React from 'react';
import getData from '../../utils/get_data_function';

import './mainPage.css';

const MainPage = () => {

    const [spinner, setSpinner] = React.useState(true);
    const [hostData, setHostData] = React.useState([]);

    React.useEffect(() => {
        const pullData = async () => {
            try {
                let respone = await getData('http://127.0.0.1:8000/api/airBnb/hosts/getAllHosts');
                console.log(respone)
                if (respone) {
                    setSpinner(false)
                }
                setHostData(respone);
            } catch (err) {
                console.log(err);
            }
        }

        pullData();
    }, []);


    return (
        <div className='main-page-cont'>
            <div className='header-image'>
            </div>
        </div>
    );
};

export default MainPage;