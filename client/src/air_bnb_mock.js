import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import SignUpAsHostPage from './pages/signUpAsHostPage/signUpAsHostPage';
import LogInPage from './pages/logInPage/logInPage';
import HeaderComp from './components/header/header.component';

import './air_bnb_mock.css';

const AirBnbMock = () => {

    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    return (
        <React.Fragment>
            <BrowserRouter>
                <HeaderComp tokenProp={token}/>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/signUpPage' exact>
                    <SignUpPage />
                </Route>
                <Route path='/logInPage' exact>
                    <LogInPage />
                </Route>
                <Route path='/signUpAsHostPage' exact>
                    <SignUpAsHostPage />
                </Route>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AirBnbMock;