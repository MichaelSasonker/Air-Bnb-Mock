import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input.component';
import ButtonComp from '../button/button.component';
import SelectComp from '../select/select.component';
import LogInButton from '../logInButton/logInButton.component';
import LogOutButton from '../logOutButton/logOutButton.component';

import './header.component.css';


const HeaderComp = ({ tokenProp, logOutProp }) => {

    const [token, setToken] = React.useState(tokenProp);

    React.useEffect(() => {
        setToken(tokenProp);
    }, [token]);

    const handleLogOutFunc = (e) => {
        logOutProp(e);
        // setToken(null);
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
                {console.log(token)}
                <SelectComp />
                {
                    token !== null
                    ? 
                        (
                            <React.Fragment>
                                <Link to='/myAccountPage'> <LogInButton /> </Link>
                                <LogOutButton logOutFunc={handleLogOutFunc} />
                            </React.Fragment>
                        ) 
                    : ''  
                }
            </div>
        </div>
    );
};

export default HeaderComp;