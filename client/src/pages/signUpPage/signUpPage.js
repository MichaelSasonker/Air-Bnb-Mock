import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignUpSuccess from '../../components/signUpSuccess/signUpSuccess.component';
import createUser from '../../utils/createUser';

import './signUpPage.css';

const localHostBackAddUserURL = 'http://localhost:8000/api/airBnb/users/addUser';

const SignUpPage = () => {

    const history = useHistory();
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [serverError, setServerError] = React.useState(false)

    const submitForm = async (values) => {
        try {
            //check how to remove the message!
            // setServerError(false);
            const newUser = await createUser(values, localHostBackAddUserURL);
            if (newUser.error) {
                setServerError(true);
            }
            else {
                localStorage.setItem('token', newUser.data.token);
                setIsSubmitted(true);
                setTimeout(() => {
                    history.push(`/`);
                }, 1500);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='sign-up-cont'>
            <div className='bck-image'></div>
            {
                !isSubmitted 
                ? ( <SignUpForm submitForm={submitForm} isError={serverError} /> ) 
                : ( <SignUpSuccess /> )
            }
        </div>
    );
};

export default SignUpPage;