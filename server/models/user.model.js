const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Renter = require('../models/renter.model');
const Host = require('../models/host.model');
const Action = require('../models/action.model');

const userSchema = new mongoose.Schema({
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.methods.toJSON = function() {
    const user = this;
    const userObj = user.toObject();

    delete userObj.password;
    delete userObj.tokens;

    return userObj;
}

userSchema.methods.generateAuthToken = async function()  {
    const user = this;
    const token = jwt.sign({ email: user.email }, 'airbnbmernproject');

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return user;
}

userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.pre('remove', async function(next) {
    const user = this;
    await Renter.findOneAndDelete({ owner: user._id });
    await Host.findOneAndDelete({ owner: user._id });
    await Action.deleteMany({ hostEmail: user.email });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
