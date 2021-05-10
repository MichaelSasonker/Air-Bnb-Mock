import React from 'react';
import { Link } from 'react-router-dom';
import validateLogInForm from '../../utils/validateLogInForm';

import './logInForm.component.css';

const LogInForm = ({ submitForm }) => {
    
    const [values, setValues] = React.useState({ email: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setErrors(validateLogInForm(values));
      setIsSubmitting(true);
    };
  
    React.useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                submitForm(values);
            }
    }, [errors, isSubmitting, submitForm]);

    return (
        <div className='form-cont'>
            <form onSubmit={(e) => handleSubmit(e)} className='form' noValidate>
                <h1>
                    Please log in
                </h1>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input
                        className='form-input'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='password'>Password:</label>
                    <input
                        className='form-input'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-log-in-btn' type='submit'>
                    Log in
                </button>
                <span className='form-login'>
                    New here? Sign up <Link to='/signUpPage'>here</Link>
                </span>
            </form>
        </div>
    );
};

export default LogInForm;