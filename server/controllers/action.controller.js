const Renter = require('../models/renter.model');
const Host = require('../models/host.model');
const Action = require('../models/action.model');
const isValidUserEmail = require('../utils/isValidEmail');
const isValidDatesRange = require('../utils/isValidDatesRange');

const getActions = async (req, res) => {
    try {
        const result = await Action.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getActionByHostEmail = async (req, res) => {
    const hostEmail = req.params.hostEmail;
    try {
        const result = await Action.findOne({ hostEmail });
        if (!result) {
            return res.status(404).send('No such host email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getActionByRenterEmail = async (req, res) => {
    const renterEmail = req.params.renterEmail;
    try {
        const result = await Action.findOne({ renterEmail });
        if (!result) {
            return res.status(404).send('No such renter email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const addAction = async (req, res) => {
    const newAction = req.body;
    const isValidRenter = await isValidUserEmail(newAction.renterEmail);

    //only renter can add action! (in React)
    // const isValidHost = await isValidUserEmail(newAction.hostEmail);
    const action = new Action(newAction);
    const host = await Host.findOne({ email: req.body.hostEmail });
    // console.log(host)
    //check how to make it unavailable when the dates are not available
    try {
        if (isValidRenter) {
            let isValidDatesRes = await isValidDatesRange(req.body.fromDate, req.body.toDate, req.body.hostEmail)
            if (!isValidDatesRes) {
                return res.status(404).send('These dates are NOT available!');
            }
            else if (host.apartmentDetails.maxGuests < req.body.guestsNumber) {
                return res.status(404).send('Guests number is too high!');
            }
            else {
                await action.save();
                return res.status(201).send(action);
            }
        }
        else {
            return res.status(404).send('Invalid user email!')
        }

    } catch (err) {
        return res.status(400).send(err);
    }
}

const deleteActionByRenterEmail = async (req, res) => {
    const renterEmail = req.params.renterEmail;
    try {
        const result = await Action.findOneAndDelete({ renterEmail });

        if (!result) {
            res.status(404).send('No such renter email!');
        }

        res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

const deleteActionByHostEmail = async (req, res) => {
    const hostEmail = req.params.hostEmail;
    try {
        const result = await Action.findOneAndDelete({ hostEmail });

        if (!result) {
            res.status(404).send('No such host email!');
        }

        res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getActions,
    getActionByHostEmail,
    getActionByRenterEmail,
    addAction,
    deleteActionByHostEmail,
    deleteActionByRenterEmail
}