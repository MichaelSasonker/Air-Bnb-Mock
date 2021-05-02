const User = require('../models/user.model');

const getUsers = (req, res) => {
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


module.exports = {
    getUsers,
    getUserByEmail,
    addUser
}