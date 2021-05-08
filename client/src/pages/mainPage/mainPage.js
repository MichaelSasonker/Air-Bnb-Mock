import React from 'react';
import getData from '../../utils/get_data_function';
import HeaderComp from '../../components/header/header.component';

import './mainPage.css';

const MainPage = () => {

    // React.useEffect(() => {
    //     const pullData = async () => {
    //         try {
    //             let respone = await getData()
    //         }
    //     }
    // }, []);


    return (
        <div className='main-page-cont'>
            <div className='header-image'>
                <HeaderComp />

            </div>
        </div>
    );
};

export default MainPage;