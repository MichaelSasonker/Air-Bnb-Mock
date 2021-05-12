import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input.component';
import ButtonComp from '../button/button.component';
import SelectCopm from '../select-semantic/select.component';

import './header.component.css';


const HeaderComp = () => {

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
                <SelectCopm />
            </div>
        </div>
    );
};

export default HeaderComp;