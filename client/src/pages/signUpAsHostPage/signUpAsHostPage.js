import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpAsHostForm from '../../components/signUpAsHostForm/signUpAsHostForm.component';
import SignUpSuccess from '../../components/signUpSuccess/signUpSuccess.component';
import createUser from '../../utils/createUser';

import './signUpAsHostPage.css';

const localHostBackAddHostURL = 'http://localhost:8000/api/airBnb/hosts/addHost';

const SignUpAsHostPage = () => {

    const history = useHistory();
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [serverError, setServerError] = React.useState(false)
    const [token, setToken] = React.useState(localStorage.getItem('token'));


    const submitForm = async (values) => {
        try {
            //check how to remove the message!
            // setServerError(false);
            const newHost = await createUser(values, localHostBackAddHostURL);
            if (newHost.error) {
                setServerError(true);
            }
            else {
                setIsSubmitted(true);
                setTimeout(() => {
                    history.push(`/`);
                }, 1500);
            }

        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        if (!token) {
            history.push(`/logInPage`);
        }
    }, []);

    return (
        <div className='host-sign-up-cont'>
            <div className='host-bck-image'></div>
            {
                !isSubmitted 
                ? ( <SignUpAsHostForm submitForm={submitForm} isError={serverError} /> ) 
                : ( <SignUpSuccess /> )
            }
        </div>
    );
};

export default SignUpAsHostPage;