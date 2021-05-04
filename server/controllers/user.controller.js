const User = require('../models/user.model');
const Renter = require('../models/renter.model');
const Host = require('../models/host.model');

const getUsers = async (req, res) => {
    try {
        const result = await User.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getUserDetails = async (req, res) => {
    return res.send(req.user);
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
        const token = await user.generateAuthToken();

        return res.status(201).send({ user, token });
    } catch (err) {

        return res.status(400).send(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const result = await User.findByCredentials(req.body.email, req.body.password);
        const token = await result.generateAuthToken();
        
        return res.send({ result, token });
    } catch (err) {
        return res.status(400).send(err);
    }
}

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
        await req.user.save();

        return res.status(200).send('User has logout!');
    } catch (err) {
        return res.status(500).send();
    }
}

const logoutAllUsers = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        return res.status(200).send('User has logout from all devices!');
    } catch (err) {
        return res.status(500).send();
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
        const result = await User.findOne({ email });
        updates.forEach((update) => user[update] = req.body[update]);
        await result.save();

        // const result = await User.findOneAndUpdate({ email }, req.body, { new: true, runValidators: true });
        if (!result) {
            return res.status(404).send('No such email!');
        }
        else if (updates.includes('email')) {
            let newEmail = req.body.email;
            const renterRes = await Renter.findOneAndUpdate({ email }, { email: newEmail }, { new: true, runValidators: true });
            const hostRes = await Host.findOneAndUpdate({ email }, { email: newEmail }, { new: true, runValidators: true });
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
            return res.status(404).send('No such email!');
        }
        else {
            const renterRes = await Renter.findOneAndDelete({ email });
            const hostRes = await Host.findOneAndDelete({ email });
        }

        return res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserByEmail,
    addUser,
    loginUser,
    logoutUser,
    logoutAllUsers,
    updateUserByEmail,
    deleteUserByEmail
}