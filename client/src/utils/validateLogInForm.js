
const validateLogInForm = (values) => {

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let errors = {};
    
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

export default validateLogInForm;