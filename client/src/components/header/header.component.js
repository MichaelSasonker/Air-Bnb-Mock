import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input.component';
import ButtonComp from '../button/button.component';
import SelectComp from '../select/select.component';
import LogInButton from '../logInButton/logInButton.component';
import LogOutButton from '../logOutButton/logOutButton.component';

import './header.component.css';


const HeaderComp = ({ tokenProp, logOutProp }) => {

    const handleLogOutFunc = (e) => {
        logOutProp(e);
    }

    return (
        <div className='header-cont'>
            <Link to='/'>
                <div className='logo-cont'></div>
            </Link>
            <InputComp clsName='search' inputType='text' inputPlaceHolder='Search' />
            <div className='links-cont'>
                <Link to='/signUpAsHostPage'>
                    <ButtonComp clsName='host-sign' inputValue='Become a host' />
                </Link>
                <SelectComp />
                {
                    tokenProp !== null
                    ? 
                        (
                            <>
                                <Link to='/myAccountPage'> <LogInButton /> </Link>
                                <LogOutButton logOutFunc={handleLogOutFunc} />
                            </>
                        ) 
                    : ''  
                }
            </div>
        </div>
    );
};

export default HeaderComp;