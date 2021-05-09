import React from 'react';
import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignUpSuccess from '../../components/signUpSuccess/signUpSuccess.component';

import './signUpPage.css';

const SignUpPage = () => {

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
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