
const validateSignUpForm = (values) => {

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let errors = {};
    
    if (!values.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (values.firstName.length > 2 && values.firstName.length < 10) {
        errors.firstName = 'First name needs to be at least 2 characters or more';
    }
    
    if (!values.lastName.trim()) {
        errors.lastName = 'Last name is required';
    } else if (values.lastName.length > 2 && values.lastName.length < 10) {
        errors.lastName = 'Last name needs to be at least 2 characters or more';
    }// cant start with number!

    
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password needs to be at least 8 characters or more';
    } else if (!strongRegex.test(values.password)) {
        errors.password = 'Weak password!';
    }
    
    return errors;
}

export default validateSignUpForm;