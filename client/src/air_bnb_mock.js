import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import SignUpAsHostPage from './pages/signUpAsHostPage/signUpAsHostPage';
import LogInPage from './pages/logInPage/logInPage';
import HeaderComp from './components/header/header.component';
import Page404 from './pages/page404/page404';
import Axios from 'axios';
import getData from './utils/get_data_function';
import './air_bnb_mock.css';

const logOutURLLocal = 'http://localhost:3000/api/airBnb/users/logoutUser';
const getAllHostsURLLocal = 'http://localhost:8000/api/airBnb/hosts/getAllHosts';

const AirBnbMock = () => {

    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [hostData, setHostData] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    React.useEffect(() => {
        const pullData = async (url) => {
            try {
                let respone = await getData(url);
                if (respone) {
                    setSpinner(false);
                }
                setHostData(respone);
            } catch (err) {
                console.log(err);
            }
        }

        pullData(getAllHostsURLLocal);
    }, []);

    const handleLogOut = async (e) => {
        try {
            await Axios.post(logOutURLLocal, null, { headers: { Authorization: `Bearer ${token}` } });
            localStorage.removeItem('token');
            setToken(null);
        } catch (err) {
            console.log(err.response.data);
        }

    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <HeaderComp tokenProp={token} logOutProp={handleLogOut} />
                <Switch>
                    <Route path='/' exact>
                        {
                            spinner ? <div className="loader">Loading...</div> 
                            : <MainPage hostsData={hostData} />
                        }
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
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AirBnbMock;