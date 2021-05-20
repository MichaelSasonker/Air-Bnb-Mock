import React from 'react';
import './rentHomeSuccess.component.css';

const RentHomeSuccess = ({ messageProp }) => {
    return (
        <div className='sign-up-success-cont'>
            <h1 className='h1-success'>
                {messageProp}
            </h1>
        </div>
    );
};

export default RentHomeSuccess;