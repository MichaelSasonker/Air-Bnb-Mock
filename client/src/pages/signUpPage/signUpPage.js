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

    const submitForm = async (values) => {
        setIsSubmitted(true);
        const newUser = await createUser(values, localHostBackAddUserURL);
        localStorage.setItem('token', newUser.data.token);
        setTimeout(() => {
            history.push(`/`);
        }, 1500);
    }

    return (
        <div className='sign-up-cont'>
            <div className='bck-image'></div>
            {
                !isSubmitted 
                ? ( <SignUpForm submitForm={submitForm} /> ) 
                : ( <SignUpSuccess /> )
            }
        </div>
    );
};

export default SignUpPage;