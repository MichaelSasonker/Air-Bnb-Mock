import React from 'react';
import { Link } from 'react-router-dom';
import HostCardComp from '../../components/hostCard/hostCard.component';

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
            <div className='hosts-cont'>
                {console.log(hostsData)}
                {
                    hostsData.length > 0 
                    ? hostsData.map((host) => <HostCardComp key={host.image} hostData={host} /> )
                    : ''
                }
            </div>
        </div>
    );
};

export default MainPage;