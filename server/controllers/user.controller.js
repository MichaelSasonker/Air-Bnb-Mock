const User = require('../models/user.model');
const Renter = require('../models/renter.model');
const Host = require('../models/host.model');


//admin
const getUsers = async (req, res) => {
    try {
        const result = await User.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const getUserDetails = async (req, res) => res.status(200).send(req.user);

//admin
//maybe admin need to get the details of specific user!
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

//user
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

//user
const loginUser = async (req, res) => {
    try {
        const result = await User.findByCredentials(req.body.email, req.body.password);
        const token = await result.generateAuthToken();

        return res.send({ result, token });
    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);

        await req.user.save();

        return res.status(200).send('User has logout!');
    } catch (err) {
        return res.status(500).send();
    }
}

//user
const logoutAllUsers = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        return res.status(200).send('User has logout from all devices!');
    } catch (err) {
        return res.status(500).send();
    }
}

//user
const updateAuthUser = async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }
    
    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        
        return res.status(200).send(req.user);
    } catch (err) {

        res.status(400).send(err);
    }
}

//admin
const deleteUserByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await User.findOneAndDelete({ email });

        if (!result) {
            return res.status(404).send('No such email!');
        }
        else {
            await Renter.findOneAndDelete({ email });
            await Host.findOneAndDelete({ email });
        }

        return res.status(202).send(result);
    } catch (err) {
        res.status(400).send();
    }
}

//user
const deleteAuthUser = async (req, res) => {
    try {
        await req.user.remove();
        // await Renter.findOneAndDelete({ email: req.user.email });
        // await Host.findOneAndDelete({ email: req.user.email });
        
        return res.status(202).send(req.user);
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
    updateAuthUser,
    deleteUserByEmail,
    deleteAuthUser
}