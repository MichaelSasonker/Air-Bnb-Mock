const mongoose = require('mongoose');
const validator = require('validator');

const renterSchema = new mongoose.Schema({
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
        trim: true,
        validate(value) {
            if (value.length !== 10) {
                throw new Error('Invalid phone number!');
            }
        }
    },
    creditCard: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length != 16) {
                throw new Error('Invalid credit card number!');
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    //maybe some search details?? rooms guests...
});

renterSchema.virtual('actions', {
    ref: 'Action',
    localField: '_id',
    foreignField: 'owner',
});

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;