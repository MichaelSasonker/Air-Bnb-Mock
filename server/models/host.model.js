const mongoose = require('mongoose');
const validator = require('validator');
const isValidCountryName = require('../utils/isValidCountryName');
const isValidCityName = require('../utils/isValidCityName');
const isPositiveInt = require('../utils/is_positive_int_function');

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
    phoneNumber: {
        type: String,
        required: true,
        // validate(value) {
        //     if (!validator.isMobilePhone(value, 'any', { strictMode: true })) {
        //         throw new Error('Invalid phone number!');
        //     }
        // }
    },
    addressDetails: {
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
    },
    apartmentDetails: {
        description: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.length <= 10) {
                    throw new Error('Description is need to be at least 10 letters!');
                }
            }
        },
        rooms: {
            type: Number,
            required: true,
            trim: true,
            validate(value) {
                if (value <= 0 || !isPositiveInt(value)) {
                    throw new Error('Invalid rooms number!');
                }
            }
        },
        beds: {
            type: Number,
            required: true,
            trim: true,
            validate(value) {
                if (value <= 0 || !isPositiveInt(value)) {
                    throw new Error('Invalid beds number!');
                }
            }
        },
        bathes: {
            type: Number,
            required: true,
            trim: true,
            validate(value) {
                if (value <= 0 || !isPositiveInt(value)) {
                    throw new Error('Invalid beds number!');
                }
            }
        },
        // imagesArr: {
        //     type: Array,
        //     required: true,
        //     validate(value) {
        //         if (value.length < 3) {
        //             throw new Error('Images array must contains at least three images!');
        //         }
        //     }
        // },
        image: {
            type: Buffer,
            //required: true
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value <=  0 || !isPositiveInt(value)) {
                    throw new Error('Price is need to be a positive number!');
                }
            }
        },
        dateAdded: {
            type: Date,
            required: false,
            default: Date.now()
        },
        maxGuests: {
            type: Number,
            required: true,
            trim: true,
            validate(value) {
                if (value <= 0 || !isPositiveInt(value)) {
                    throw new Error('Invalid maximum guests number!');
                }
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    // rank: {}
});

module.exports = Host;

