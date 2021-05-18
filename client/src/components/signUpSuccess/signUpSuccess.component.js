import React from 'react';
import './signUpSuccess.component.css';

const SignUpSuccess = ({ messageProp }) => {
    return (
        <div className='sign-up-success-cont'>
            <h1 className='h1-success'>
                {messageProp}
            </h1>
        </div>
    );
};

export default SignUpSuccess;