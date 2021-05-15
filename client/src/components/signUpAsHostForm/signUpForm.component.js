import React from 'react';
import validateSignUpForm from '../../utils/validateSignUpForm';
import './signUpForm.component.css';
import { Link } from 'react-router-dom';

const SignUpForm = ({ submitForm, isError }) => {
    
    const [values, setValues] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    // const [serverError, setServerError] = React.useState(false)

    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setErrors(validateSignUpForm(values));
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
                    Create your account
                </h1>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='firstName'>First Name:</label>
                    <input
                        className='form-input'
                        id='firstName'
                        type='text'
                        name='firstName'
                        placeholder='Enter your first name'
                        value={values.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label' htmlFor='lastName'>Last Name:</label>
                    <input
                        className='form-input'
                        id='lastName'
                        type='text'
                        name='lastName'
                        placeholder='Enter your last name'
                        value={values.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
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
                    {isError && <p>Email already exsit!</p>}
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
                <button className='form-btn' type='submit'>
                    Sign up
                </button>
                <span className='form-login'>
                    Already have an account? Login <Link to='/logInPage'>here</Link>
                </span>
            </form>
        </div>
    );
};

export default SignUpForm;