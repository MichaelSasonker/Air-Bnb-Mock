import React from 'react';
import validateRentHomeForm from '../../utils/validateRentHomeForm';
import './rentHomeForm.component.css';

const RentHomeForm = ({ submitForm, isError, hostEmailProp }) => {
    
    const [values, setValues] = React.useState({
        renterEmail: '',
        phoneNumber: '',
        creditCard: '',
        HostEmail: hostEmailProp,
        fromDate: '',
        toDate: '',
        guestsNumber: '',
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    // const [serverError, setServerError] = React.useState(false)

    const handleChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setErrors(validateRentHomeForm(values));
      setIsSubmitting(true);
    };
  
    React.useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                submitForm(values);
            }
    }, [errors, isSubmitting, submitForm]);

    return (
        <div className='rent-form-cont'>
            <form onSubmit={(e) => handleSubmit(e)} className='rent-form' noValidate>
                <h1>
                    Rent this apartment
                </h1>
                <div className='rent-form-inputs'>
                    <label className='rent-form-label' htmlFor='email'>Email:</label>
                    <input
                        className='rent-form-input'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='rent-form-inputs'>
                    <label className='rent-form-label' htmlFor='phoneNumber'>Phone Number:</label>
                    <input
                        className='rent-form-input'
                        id='phoneNumber'
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        value={values.phoneNumber}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div className='rent-form-inputs'>
                    <label className='rent-form-label' htmlFor='creditCard'>Credit Card:</label>
                    <input
                        className='rent-form-input'
                        id='creditCard'
                        type='text'
                        name='creditCard'
                        placeholder='Enter your credit card'
                        value={values.phoneNumber}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.creditCard && <p>{errors.creditCard}</p>}
                </div>
                <div className='rent-form-inputs'>
                    <label className='rent-form-label' htmlFor='fromDate'>Check-In:</label>
                    <input
                        className='rent-form-input'
                        id='fromDate'
                        type='date'
                        name='fromDate'
                        placeholder='Add date'
                        value={values.fromDate}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.fromDate && <p>{errors.fromDate}</p>}
                </div>
                <div className='rent-form-inputs'>
                    <label className='rent-form-label' htmlFor='toDate'>Checkout:</label>
                    <input
                        className='rent-form-input'
                        id='toDate'
                        type='date'
                        name='toDate'
                        placeholder='Add date'
                        value={values.toDate}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.toDate && <p>{errors.toDate}</p>}
                </div>
                <button className='rent-form-btn' type='submit'>
                    Rent-ME
                </button>
            </form>
        </div>
    );
};

export default RentHomeForm;