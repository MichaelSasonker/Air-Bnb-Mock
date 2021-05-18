import React from 'react';
import validateSignUpAsHostForm  from '../../utils/validateSignUpAsHostForm ';
import './signUpAsHostForm.component.css';

const SignUpAsHostForm = ({ submitForm, isError }) => {

    const [values, setValues] = React.useState({
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        address: '',
        description: '',
        rooms: '',
        beds: '',
        bathes: '',
        price: '',
        maxGuests: '',
        image: ''
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
  
      setErrors(validateSignUpAsHostForm(values));
      setIsSubmitting(true);
    };
  
    React.useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                submitForm(values);
            }
    }, [errors, isSubmitting, submitForm]);

    return (
        <div className='host-form-cont'>
            <form onSubmit={(e) => handleSubmit(e)} className='host-form' noValidate>
                <h1>
                    Home Details:
                </h1>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='email'>Email:</label>
                    <input
                        className='host-form-input'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {isError && <p>Email already exsit!</p>} */}
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='phoneNumber'>Phone Number:</label>
                    <input
                        className='host-form-input'
                        id='phoneNumber'
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        value={values.phoneNumber}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='country'>Country:</label>
                    <input
                        className='host-form-input'
                        id='country'
                        type='text'
                        name='country'
                        placeholder='Enter the country name'
                        value={values.country}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.country && <p>{errors.country}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='city'>City:</label>
                    <input
                        className='host-form-input'
                        id='city'
                        type='text'
                        name='city'
                        placeholder='Enter the city name'
                        value={values.city}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='address'>Address:</label>
                    <input
                        className='host-form-input'
                        id='address'
                        type='text'
                        name='address'
                        placeholder='Enter the address'
                        value={values.address}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.address && <p>{errors.address}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='description'>Description:</label>
                    <input
                        className='host-form-input'
                        id='description'
                        type='text'
                        name='description'
                        placeholder='Enter your description'
                        value={values.description}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='rooms'>Rooms:</label>
                    <input
                        className='host-form-input'
                        id='rooms'
                        type='number'
                        name='rooms'
                        placeholder='Enter the number of rooms'
                        value={values.rooms}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.rooms && <p>{errors.rooms}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='beds'>Beds:</label>
                    <input
                        className='host-form-input'
                        id='beds'
                        type='number'
                        name='beds'
                        placeholder='Enter the number of beds'
                        value={values.beds}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.beds && <p>{errors.beds}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='bathes'>Bathes:</label>
                    <input
                        className='host-form-input'
                        id='bathes'
                        type='number'
                        name='bathes'
                        placeholder='Enter the number of bathes'
                        value={values.bathes}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.bathes && <p>{errors.bathes}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='price'>Price:</label>
                    <input
                        className='host-form-input'
                        id='price'
                        type='number'
                        name='price'
                        placeholder='Enter your price'
                        value={values.price}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label' htmlFor='maxGuests'>Max Guests Number:</label>
                    <input
                        className='host-form-input'
                        id='maxGuests'
                        type='number'
                        name='maxGuests'
                        placeholder='Enter your maximum guests number'
                        value={values.maxGuests}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.maxGuests && <p>{errors.maxGuests}</p>}
                </div>
                <div className='host-form-inputs'>
                    <label className='host-form-label img-btn' htmlFor='image'>Image:</label>
                    <input
                        className='img-btn'
                        id='image'
                        type='file'
                        name='image'
                        // value={values.image}
                        onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
                    />
                    {errors.image && <p>{errors.image}</p>}
                </div>
                
                <button className='host-form-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUpAsHostForm;