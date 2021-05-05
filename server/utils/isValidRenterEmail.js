const Renter = require('../models/renter.model');

const isValidRenterEmail = async (email) => {

    try {
        const result = await Renter.findOne({ email });
        if (result === null) {
            return false;
        }
        return true;
    } catch (err) {
        throw new Error('Something wents wrong!');
    }
}

module.exports = isValidRenterEmail;