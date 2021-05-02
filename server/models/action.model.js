const mongoose = require('mongoose');
const validator = require('validator');
const isPositiveInt = require('../utils/is_positive_int_function');

const Action = mongoose.model('Action', {
    hostEmail: {
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
    renterEmail: {
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
    fromDate: {
        type: Date,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isDate(value)) {
                throw new Error('Invalid date!');
            }
        }
    },
    toDate: {
        type: Date,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isDate(value)) {
                throw new Error('Invalid date!');
            }
        }
    },
    guestNumber: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value <= 0 || !isPositiveInt(value)) {
                throw new Error('Invalid maximum guests number!');
            }
        }
    }

});

module.exports = Action;