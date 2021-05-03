const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const result = await User.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getUserByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await User.findOne({ email });
        if (!result) {
            return res.status(404).send('No such email address!');
        }

        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const addUser = async (req, res) => {
    const newUser = req.body;
    const user = new User(newUser);
    
    try {
        await user.save();

        return res.status(201).send(user);
    } catch (err) {

        return res.status(400).send(err);
    }
}

const updateUserByEmail = async (req, res) => {
    const email = req.params.email;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const result = await User.findOneAndUpdate(email, req.body, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).send('No such email!');
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

const deleteUserByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await User.findOneAndDelete({ email });

        if (!result) {
            res.status(404).send('No such email!');
        }

        res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getUsers,
    getUserByEmail,
    addUser,
    updateUserByEmail,
    deleteUserByEmail
}