const adminAuth = async (req, res, next) => {
    try {
        if (req.user.userRole !== 'admin') {
            return res.status(403).send();
        }

        next();
    } catch (err) {
        res.status(404).send(err);
    }
}

module.exports = adminAuth;