const mongoose = require('mongoose');
const validator = require('validator');
const isValidCountryName = require('../utils/isValidCountryName');
const isValidCityName = require('../utils/isValidCityName');

const Host = mongoose.model('Host', {
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
    country: {
        type: String,
        required: true,
        trim: true,
        async validate(value) {
            const isValid = await isValidCountryName(value);
            if (!isValid) {
                throw new Error('No such country!');
            }     
        }
    },
    city: {
        type: String,
        required: true,
        trim: true,
        async validate(value) {
            const isValid = await isValidCityName(value);
            if (!isValid) {
                throw new Error('No such country!');
            }     
        }
    },
    address: {
        type: String,
        required: true,
        trim: true,
       //validate adress!!! 

    }
    //todo: continue!!!

})

module.exports = Host;