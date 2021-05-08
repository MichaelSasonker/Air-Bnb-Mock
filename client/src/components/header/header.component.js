import React from 'react';
import InputComp from '../input/input.component';
import ButtonComp from '../button/button.component';
import { Link } from 'react-router-dom';

import './header.component.css';
const HeaderComp = () => {

    return (
        <div className='header-cont'>
            <Link to='/'>
                <div className='logo-cont'>logo</div>
            </Link>
            <InputComp clsName='search' inputType='text' inputPlaceHolder='Search' />
            <div className='links-cont'>
                <Link to='/signUpPage'>
                    <ButtonComp clsName='user-sign' inputValue='Sign up' />
                </Link>
                <Link to='/signUpAsHostPage'>
                    <ButtonComp clsName='host-sign' inputValue='Become a host' />
                </Link>
            </div>
        </div>
    );
};

export default HeaderComp;