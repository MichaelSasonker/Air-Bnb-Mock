// const isValidCountryName = require('../utils/isValidCountryName');
// const isValidCityName = require('../utils/isValidCityName')
import isValidCountryName from '../utils/isValidCountryName';
import isValidCityName from '../utils/isValidCityName';
const isPositiveNumber = require('../utils/is_positive_int_function');

const validateSignUpAsHostForm = (values) => {

    let errors = {};
  
    if (!values.email.trim()) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } 
   
    if (!values.country.trim()) {
        errors.country = 'Country name is required';
    } else if (!isValidCountryName(values.country)) {
      errors.country = 'Country name is invalid';
    }

    if (!values.city.trim()) {
      errors.city = 'City name is required';
    } else if (!isValidCityName(values.city)) {
      errors.city = 'City name is invalid';
    }

    if (!values.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!values.description.trim()) {
      errors.description = 'Description is required';
    } else if (values.description.length < 10) {
      errors.description = 'Description is need to be at least 10 charecters!';
    }

    if (!values.rooms.trim()) {
      errors.rooms = 'Rooms is required';
    } else if (!isPositiveNumber(values.rooms)) {
      errors.rooms = 'Number of rooms is invalid!';
    }

    if (!values.beds.trim()) {
      errors.beds = 'Beds is required';
    } else if (!isPositiveNumber(values.beds)) {
      errors.beds = 'Number of beds is invalid!';
    }

    if (!values.bathes.trim()) {
      errors.bathes = 'Bathes is required';
    } else if (!isPositiveNumber(values.bathes)) {
      errors.bathes = 'Number of bathes is invalid!';
    }
    
    if (!values.price.trim()) {
      errors.price = 'Price is required';
    } else if (!isPositiveNumber(values.price)) {
      errors.price = 'Price number is invalid!';
    }
    
    if (!values.maxGuests.trim()) {
      errors.maxGuests = 'maxGuests is required';
    } else if (!isPositiveNumber(values.maxGuests)) {
      errors.maxGuests = 'Guests number is invalid!';
    }

    // if (!values.image.trim()) {
    //   errors.image = 'Image is required';
    // }

    return errors;
}

export default validateSignUpAsHostForm;