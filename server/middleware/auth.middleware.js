const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'airbnbmernproject');
        const user = await User.findOne({ email: decoded.email, 'tokens.token': token });

        if (!user) {
            throw new Error()
        }

        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).send({error: 'Please authenticate!'});
    }

}

module.exports = auth;