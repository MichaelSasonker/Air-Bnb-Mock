const User = require('../models/user.model');

const isValidUserEmail = async (email) => {

    try {
        const result = await User.findOne({ email });
        if (result === null) {
            return false;
        }
        return true;
    } catch (err) {
        throw new Error('Something wents wrong!');
    }
}

module.exports = isValidUserEmail;