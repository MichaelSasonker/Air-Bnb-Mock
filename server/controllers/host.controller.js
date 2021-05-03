const Host = require('../models/host.model');
const isValidUserEmail = require('../utils/isValidEmail');

const getHosts = async (req, res) => {
    try {
        const result = await Host.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getHostByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await Host.findOne({ email });
        if (!result) {
            return res.status(404).send('No such email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const addHost = async (req, res) => {
    const newHost = req.body;
    const isValid = await isValidUserEmail(newHost.email);
    const host = new Host(newHost);
    
    try {
        if (isValid) {
            await host.save();
            return res.status(201).send(host);
        }
        else {
            return res.status(404).send('Invalid user email!')
        }

    } catch (err) {
        return res.status(400).send(err);
    }
}

const updateHostByEmail = async (req, res) => {
    const email = req.params.email;
    const updates = Object.keys(req.body);
    //TODO: check for another ways to update the host -> NOT addressDetails.country
    const allowedUpdates = [
        'phoneNumber', 'addressDetails.country', 'addressDetails.city', 'addressDetails.address'
        , 'apartmentDetails.description', 'apartmentDetails.rooms', 'apartmentDetails.bathes', 'apartmentDetails.beds'
        , 'apartmentDetails.price', 'apartmentDetails.maxGuests' 
    ];

    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const result = await Host.findOneAndUpdate({ email }, req.body, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).send('No such email!');
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

const deleteHostByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await Host.findOneAndDelete({ email });

        if (!result) {
            res.status(404).send('No such email!');
        }

        res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getHosts,
    getHostByEmail,
    addHost,
    updateHostByEmail,
    deleteHostByEmail
}