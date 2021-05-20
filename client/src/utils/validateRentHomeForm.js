

const validateRentHomeForm = (values) => {

    let phoneReg = /^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/;
    let errors = {};
    
    if (!values.renterEmail.trim()) {
        errors.renterEmail = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.renterEmail)) {
        errors.renterEmail = 'Email address is invalid';
    } 

    if (!values.phoneNumber.match(phoneReg)) {
        errors.phoneNumber = 'Invalid phone number';
    } else if (!values.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone number is required';
    }
    
    if (!values.creditCard.trim()) {
        errors.creditCard = 'Credit card is required';
    } else if (values.creditCard.length !== 16) {
        errors.creditCard = 'Invalid credit card';
    }

    if (!values.fromDate.trim()) {
        errors.fromDate = 'Check-in date is required';
    }
    
    if (!values.toDate.trim()) {
        errors.toDate = 'Checkout date is required';
    }

    if (!values.guestsNumber.trim()) {
        errors.guestsNumber = 'Guests number date is required';
    }

    return errors;
}

export default validateRentHomeForm;