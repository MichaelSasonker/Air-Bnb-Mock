import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComp from '../../components/carousel/carousel.component';
// import HostCardComp from '../../components/hostCard/hostCard.component';

import './mainPage.css';


const MainPage = ({ hostsData }) => {

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
                {/* <div className='hosts-cont'>
                    {console.log(hostsData)}
                    {
                        hostsData.length > 0 
                        ? hostsData.map((host, index) => <HostCardComp key={index} hostData={host} /> )
                        : ''
                    }
                </div> */}
                <CarouselComp hostsData={hostsData} />
            </div>
        </div>
    );
};

export default MainPage;