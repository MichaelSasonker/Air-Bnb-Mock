import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import SignUpAsHostPage from './pages/signUpAsHostPage/signUpAsHostPage';
import LogInPage from './pages/logInPage/logInPage';
import HeaderComp from './components/header/header.component';
import HostPage from './pages/hostPage/hostPage';
import Page404 from './pages/page404/page404';
import Axios from 'axios';
import getData from './utils/get_data_function';
import './air_bnb_mock.css';

const logOutURLLocal = 'http://localhost:3000/api/airBnb/users/logoutUser';
const getAllHostsURLLocal = 'http://localhost:8000/api/airBnb/hosts/getAllHosts';

const AirBnbMock = () => {

    const history = useHistory();

    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [hostsData, setHostsData] = React.useState([]);
    const [oneHostData, setOneHostData] = React.useState([]);
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
                setHostsData(respone);
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

    const getHostData = (hostData) => {
        console.log(hostData)
        setOneHostData(hostData);
    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <HeaderComp tokenProp={token} logOutProp={handleLogOut} />
                <div className='main-cont-section'>
                    {/* <Switch> */}
                        <Route path='/' exact>
                            {
                                spinner ? <div className="loader">Loading...</div> 
                                : <MainPage hostsData={hostsData} hostDataFunc={getHostData}/>
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
                        {   
                            oneHostData.length > 0 
                            ? <Route path={`/${oneHostData[0].owner}}`} exact> 
                                    {spinner ? <div className="loader">Loading...</div> 
                                    : <HostPage hostProp={oneHostData[0]} />} 
                                </Route>
                            : <div></div> 
                        }
                        {/* <Route path="*" component={Page404} /> */}
                    {/* </Switch> */}
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AirBnbMock;