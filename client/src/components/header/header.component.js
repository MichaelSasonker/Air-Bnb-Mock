import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input.component';
import ButtonComp from '../button/button.component';
import SelectComp from '../select/select.component';
import LogInButton from '../logInButton/logInButton.component';

import './header.component.css';


const HeaderComp = ({ tokenProp }) => {

    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        setToken(tokenProp);
    }, [token]);

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
                    token !== null
                    ? <Link to='/myAccountPage'> <LogInButton /> </Link> 
                    : ''  
                }
            </div>
        </div>
    );
};

export default HeaderComp;