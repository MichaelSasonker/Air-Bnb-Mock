
const validateSignUpAsHostForm = (values) => {

    let errors = {};
    
    if (!values.phoneNumber.trim()) {
      errors.firstName = 'Phone Number is required';
    } 
    // else if (values.firstName.length > 2 && values.firstName.length < 10) {
    //     errors.firstName = 'First name needs to be at least 2 characters or more';
    // }

    if (!values.addressDetails.country.trim()) {
        errors.lastName = 'Country name is required';
    } 
    // else if (values.lastName.length > 2 && values.lastName.length < 10) {
    //     errors.lastName = 'Last name needs to be at least 2 characters or more';
    // }// cant start with number!

    if (!values.addressDetails.city.trim()) {
      errors.lastName = 'City name is required';
    }

    if (!values.addressDetails.address.trim()) {
      errors.lastName = 'Address is required';
    }

    if (!values.addressDetails.country.trim()) {
      errors.lastName = 'Last name is required';
    } 
    if (!values.email.trim()) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    } 
    
    
    return errors;
}

export default validateSignUpAsHostForm;