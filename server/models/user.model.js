const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error('The name is too short!');
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error('The name is too short!');
            }
        }
    },
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
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error('Weak password!');
            }
        }
    }
});

module.exports = User;
