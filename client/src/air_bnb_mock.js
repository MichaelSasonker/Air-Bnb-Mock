import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import SignUpAsHostPage from './pages/signUpAsHostPage/signUpAsHostPage';
import LogInPage from './pages/logInPage/logInPage';
import HeaderComp from './components/header/header.component';
import createUser from './utils/createUser';

import './air_bnb_mock.css';
import Axios from 'axios';

const logOutURLLocal = 'http://localhost:3000/api/airBnb/users/logoutUser';

const AirBnbMock = () => {

    const [token, setToken] = React.useState(localStorage.getItem('token'));

    React.useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    const handleLogOut = async (e) => {
        try {
            await Axios.post(logOutURLLocal, null, { headers: { Authorization: `Bearer ${token}` } });
        } catch (err) {
            console.log(err.response.data);
        }
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <HeaderComp tokenProp={token} logOutProp={handleLogOut}/>
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