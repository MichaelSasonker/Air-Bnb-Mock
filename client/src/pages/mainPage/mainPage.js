import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComp from '../../components/carousel/carousel.component';

import './mainPage.css';

const MainPage = ({ hostsData, hostDataFunc }) => {

    const handleHostClicked = (hostData) => {
        hostDataFunc(hostData);
    }

    return (
        <div className='main-page-cont'>
            <div className='header-image'>
                <p className='about-link-cont'>
                    Want To Know More?
                </p>
                <Link to='/signUpPage'>
                    <div className='link-btn'>
                            About us
                    </div>
                </Link>
            </div>
            <div className='middle-page-cont'>
                <h1 className='host-header'>Some of Our Hosts:</h1>
                <CarouselComp hostsData={hostsData} isClicked={handleHostClicked}/>
            </div>
        </div>
    );
};

export default MainPage;