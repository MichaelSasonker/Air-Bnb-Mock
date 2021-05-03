const mongoose = require('mongoose');
const validator = require('validator');
// const isValidCountryName = require('../utils/isValidCountryName');
// const isValidCityName = require('../utils/isValidCityName');
// const isPositiveInt = require('../utils/is_positive_int_function');

const Renter = mongoose.model('Renter', {
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email address!');
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
        // validate(value) {
        //     if (!validator.isMobilePhone(value, 'any', { strictMode: true })) {
        //         throw new Error('Invalid phone number!');
        //     }
        // }
    },
    creditCard: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            // if(!validator.isCreditCard(value)) {
            //     throw new Error('Invalid credit card number!');
            // }
            if (value.length != 16) {
                throw new Error('Invalid credit card number!');
            }
        }
    }
    //maybe some search details?? rooms guests...
    
});

module.exports = Renter;