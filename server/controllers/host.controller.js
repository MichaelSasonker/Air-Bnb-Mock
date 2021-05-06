const Host = require('../models/host.model');
const isValidUserEmail = require('../utils/isValidEmail');
const sharp = require('sharp');

//user
const getHosts = async (req, res) => {
    try {
        const result = await Host.find({});
        return res.status(200).send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

//user
const getHostDetails = async (req, res) => {
    const host = await Host.findOne({ email: req.user.email, owner: req.user._id });
    if (!host) {
        return res.status(404).send('You need to sign in as host!');
    }
    return res.status(200).send(host);
}

//admin 
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

//user 
const getHostImage = async (req, res) => {
    try {
        const host = await Host.findOne({ email: req.user.email, owner: req.user._id });
        if (!host) {
            throw new Error();
        }

    } catch (err) {
        return res.status(404).send();
    }

}

//user
const addHost = async (req, res) => {
    const isValid = await isValidUserEmail(req.body.email);
    
    if(req.body.email !== req.user.email) {
        return res.status(403).send('You can only add host with your email!');
    } 

    const host = new Host({
        ...req.body,
        owner: req.user._id
    });
    try {
        if (isValid) {
            // const buffer = await sharp(req.file.buffer).resize({ width: 500, height: 500 }).png().toBuffer();
            // host.apartmentDetails.imagesArr = buffer;
            // console.log(host)
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

//user
const updateAuthHost = async (req, res) => {
    //TODO: check for another ways to update the host -> NOT addressDetails.country
    const updates = Object.keys(req.body);
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
        const result = await Host.findOneAndUpdate({ email: req.user.email, owner: req.user._id }, req.body, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).send('No such email!');
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

//user
const deleteAuthHost = async (req, res) => {
    try {
        const host = await Host.findOneAndDelete({ email: req.user.email, owner: req.user._id });

        if (!host) {
            return res.status(404).send('No such email!');
        }

        res.status(202).send(host);
    } catch (err) {
        return res.status(400).send();
    }
}

// const deleteHostByEmail = async (req, res) => {
//     const email = req.params.email;
//     try {
//         const result = await Host.findOneAndDelete({ email });

//         if (!result) {
//             res.status(404).send('No such email!');
//         }

//         res.status(202).send(result);
//     } catch (err) {
//         res.status(400).send();
//     }
// }

module.exports = {
    getHosts,
    getHostDetails,
    getHostByEmail,
    getHostImage,
    addHost,
    updateAuthHost,
    deleteAuthHost
    // deleteHostByEmail
}