import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import SignUpAsHostPage from './pages/signUpAsHostPage/signUpAsHostPage';
import LogInPage from './pages/logInPage/logInPage';


import './air_bnb_mock.css';

const AirBnbMock = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/signUpPage' exact>
                    <SignUpPage />
                </Route>
                <Route path='/logInPage' exact>
                    <LogInPage />
                </Route>
                <Route path='/signUpAsHostPage'>
                    <SignUpAsHostPage />
                </Route>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AirBnbMock;