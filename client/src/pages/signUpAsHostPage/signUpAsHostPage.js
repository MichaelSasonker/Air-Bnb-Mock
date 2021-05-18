import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpAsHostForm from '../../components/signUpAsHostForm/signUpAsHostForm.component';
import SignUpSuccess from '../../components/signUpSuccess/signUpSuccess.component';
import createHost from '../../utils/createHost';

import './signUpAsHostPage.css';

const localHostBackAddHostURL = 'http://localhost:8000/api/airBnb/hosts/addHost';

const SignUpAsHostPage = () => {

    const history = useHistory();
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [serverError, setServerError] = React.useState(false)
    const [token, setToken] = React.useState(localStorage.getItem('token'));


    const submitForm = async (values) => {
        let formData = new FormData();
        // console.log(values)
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value);
        }

        try {
            //check how to remove the message!
            // setServerError(false);
            // const newHost = await createHost(formData, token, localHostBackAddHostURL);
            const newHost = await axios.post(localHostBackAddHostURL, formData, { headers: { Authorization: `Bearer ${token}` }});
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
                : ( <SignUpSuccess messageProp='Your home is ready!' /> )
            }
        </div>
    );
};

export default SignUpAsHostPage;