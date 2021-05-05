const Host = require('../models/host.model');
const Action = require('../models/action.model');
const isValidRenterEmail = require('../utils/isValidRenterEmail');
const isValidDatesRange = require('../utils/isValidDatesRange');

//admin
const getActions = async (req, res) => {
    try {
        const result = await Action.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const getActionsDetails = async (req, res) => {
    // const renter = await Renter.findOne({ email: req.user.email });
    try {
        const hostActions = await Action.find({ hostEmail: req.user.email });
        const renterActions = await Action.find({ renterEmail: req.user.email });

        if (!hostActions && !renterActions) {
            return res.status(404).send('No actions for this user!');
        }
        else if (!renterActions && hostActions) {
            return res.status(200).send(hostActions);
        }
        else if (renterActions && !hostActions){
            return res.status(200).send(renterActions);
        }
        else {
            return res.status(200).send({ hostActions, renterActions });
        }

    } catch (err) {
        return res.status(400).send(err);
    }
}

//admin
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

// const getActionByRenterEmail = async (req, res) => {
//     const renterEmail = req.params.renterEmail;
//     try {
//         const result = await Action.findOne({ renterEmail });
//         if (!result) {
//             return res.status(404).send('No such renter email address!');
//         }

//         return res.status(200).send(result);
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// }

//user
const addAction = async (req, res) => {
    const isValidRenter = await isValidRenterEmail(req.user.email);
    //only renter can add action! (in React)

    const action = new Action(req.body);
    const host = await Host.findOne({ email: req.body.hostEmail });

    try {
        if (isValidRenter && host) {
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

// const deleteActionByRenterEmail = async (req, res) => {
//     const renterEmail = req.params.renterEmail;
//     try {
//         const result = await Action.findOneAndDelete({ renterEmail });

//         if (!result) {
//             res.status(404).send('No such renter email!');
//         }

//         res.status(202).send(result);
//     } catch (err) {
//         res.status(400).send();
//     }
// }

// const deleteActionByHostEmail = async (req, res) => {
//     const hostEmail = req.params.hostEmail;
//     try {
//         const result = await Action.findOneAndDelete({ hostEmail });

//         if (!result) {
//             res.status(404).send('No such host email!');
//         }

//         res.status(202).send(result);
//     } catch (err) {
//         res.status(400).send();
//     }
// }

module.exports = {
    getActions,
    getActionByHostEmail,
    getActionsDetails,
    // getActionByRenterEmail,
    addAction,
    // deleteActionByHostEmail,
    // deleteActionByRenterEmail
}