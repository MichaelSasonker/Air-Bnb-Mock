const Renter = require('../models/renter.model');
const isValidUserEmail = require('../utils/isValidEmail');

const getRenters = async (req, res) => {
    try {
        const result = await Renter.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getRenterByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await Renter.findOne({ email });
        if (!result) {
            return res.status(404).send('No such email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const addRenter = async (req, res) => {
    const newRenter = req.body;
    const isValid = await isValidUserEmail(newRenter.email);
    const renter = new Renter(newRenter);
    
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

const updateRenterByEmail = async (req, res) => {
    const email = req.params.email;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['phoneNumber', 'creditCard'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const result = await Renter.findOneAndUpdate({ email }, req.body, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).send('No such email!');
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

const deleteRenterByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await Renter.findOneAndDelete({ email });

        if (!result) {
            res.status(404).send('No such email!');
        }

        res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getRenters,
    getRenterByEmail,
    addRenter,
    updateRenterByEmail,
    deleteRenterByEmail
}