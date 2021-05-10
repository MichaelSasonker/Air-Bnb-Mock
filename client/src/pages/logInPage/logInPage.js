import React from 'react';
import { useHistory } from 'react-router-dom';
import LogInForm from '../../components/logInForm/logInForm.component';
import LogInSuccess from '../../components/logInSuccess/logInSuccess.component';
import createUser from '../../utils/createUser';
import './logInPage.css';

const localHostBackLogInUserURL = 'http://localhost:8000/api/airBnb/users/loginUser';

const LogInPage = () => {

    const history = useHistory();
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const submitForm = async (values) => {
        setIsSubmitted(true);
        const logUser = await createUser(values, localHostBackLogInUserURL);
        localStorage.setItem('token', logUser.data.token);
        setTimeout(() => {
            history.push(`/`);
        }, 1500);
    }

    return (
        <div className='sign-up-cont'>
            <div className='log-bck-image'></div>
            {
                !isSubmitted 
                ? ( <LogInForm submitForm={submitForm} /> ) 
                : ( <LogInSuccess /> )
            }
        </div>
    );
}

export default LogInPage;

