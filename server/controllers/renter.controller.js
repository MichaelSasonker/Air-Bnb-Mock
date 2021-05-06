const Renter = require('../models/renter.model');
const isValidUserEmail = require('../utils/isValidEmail');

//admin
const getRenters = async (req, res) => {
    try {
        const result = await Renter.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const getRenterDetails = async (req, res) => {
    // const renter = await Renter.findOne({ email: req.user.email });
    const renter = await Renter.findOne({ email: req.user.email, owner: req.user._id });
    if (!renter) {
        return res.status(404).send('You need to sign in as renter!');
    }
    return res.status(200).send(renter);
}

//admin
const getRenterByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await Renter.findOne({ email });
        if (!result) {
            return res.status(404).send('No such email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err);
    }
}

//user
const addRenter = async (req, res) => {
    let renter;

    const isValid = await isValidUserEmail(req.body.email);

    if (req.body.email === req.user.email) {
        renter = new Renter({
            ...req.body,
            owner: req.user._id
        });
    } else {
        return res.status(403).send('You can only add renter with your email!');
    }
    
    try {
        if (isValid) {
            await renter.save();
            return res.status(201).send(renter);
        }
        else {
            return res.status(404).send('Invalid user email!')
        }

    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const updateAuthRenter = async (req, res) => {
    // const email = req.params.email;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['phoneNumber', 'creditCard'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const result = await Renter.findOneAndUpdate({ email: req.user.email, owner: req.user._id }, req.body, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).send('No such email!');
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

//admin
// const deleteRenterByEmail = async (req, res) => {
//     const email = req.params.email;
//     try {
//         const result = await Renter.findOneAndDelete({ email });

//         if (!result) {
//             res.status(404).send('No such email!');
//         }

//         res.status(202).send(result);
//     } catch (err) {
//         res.status(400).send();
//     }
// }

module.exports = {
    getRenters,
    getRenterDetails,
    getRenterByEmail,
    addRenter,
    updateAuthRenter
    // deleteRenterByEmail
}