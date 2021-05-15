const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const renterController = require('../controllers/renter.controller');
const hostController = require('../controllers/host.controller');
const actionController = require('../controllers/action.controller');
const auth = require('../middleware/auth.middleware');
const adminAuth = require('../middleware/adminAuth.middleware');
const upload = require('../middleware/imageUpload.middleware');

/* Users Routes: */
router.get('/users/getAllUsers', auth, adminAuth, (req, res) => userController.getUsers(req, res))//admin
.get('/users/getUserDetails/me', auth, (req, res) => userController.getUserDetails(req, res))
.get('/users/getUserByEmail/:email', auth, adminAuth, (req, res) => userController.getUserByEmail(req, res))//admin
.post('/users/addUser', (req, res) => userController.addUser(req, res))
.post('/users/loginUser', (req, res) => userController.loginUser(req, res))
.post('/users/logoutUser', auth, (req, res) => userController.logoutUser(req, res))
.post('/users/logoutAll', auth, (req, res) => userController.logoutAllUsers(req, res))
.patch('/users/updateUser/me', auth, (req, res) => userController.updateAuthUser(req, res))
.delete('/users/deleteUserByEmail/:email', auth, adminAuth, (req, res) => userController.deleteUserByEmail(req, res))//admin
.delete('/users/deleteUser/me', auth, (req, res) => userController.deleteAuthUser(req, res));

/* Renter Routes: */
router.get('/renters/getAllRenters', auth, adminAuth, (req, res) => renterController.getRenters(req, res))//admin
.get('/renters/getRenterDetails/me', auth, (req, res) => renterController.getRenterDetails(req, res))
.get('/renters/getRenterByEmail/:email', auth, adminAuth, (req, res) => renterController.getRenterByEmail(req, res))//admin
.post('/renters/addRenter', auth, (req, res) => renterController.addRenter(req, res))
.patch('/renters/updateRenter/me', auth, (req, res) => renterController.updateAuthRenter(req, res));
// .delete('/renters/deleteRenterByEmail/:email', auth, (req, res) => renterController.deleteRenterByEmail(req, res))//admin;

/* Host Routes: */
router.get('/hosts/getAllHosts', (req, res) => hostController.getHosts(req, res))
.get('/hosts/getHostDetails/me', auth, (req, res) => hostController.getHostDetails(req, res))
.get('/hosts/getHostByEmail/:email', auth, adminAuth, (req, res) => hostController.getHostByEmail(req, res))//admin
.get('/hosts/getHostImage/me', auth, (req, res) => hostController.getHostImage(req, res))
.post(
    '/hosts/addHost', auth, upload.single('image'), (req, res) => { hostController.addHost(req, res)}
    , (error, req, res, next) => res.status(400).send({ error: error.message })
)
// .post('/hosts/addHost', auth, (req, res) => hostController.addHost(req, res))
.patch('/hosts/updateHost/me', auth, (req, res) => hostController.updateAuthHost(req, res))
.delete('/hosts/deleteHost/me', auth, (req, res) => hostController.deleteAuthHost(req, res));
// .delete('/hosts/deleteHostByEmail/:email', auth, (req, res) => hostController.deleteHostByEmail(req, res));

/* Action Routes: */
router.get('/actions/getAllActions', auth, adminAuth, (req, res) => actionController.getActions(req, res))//admin
.get('/actions/getActionsDetails/me', auth, (req, res) => actionController.getActionsDetails(req, res))
.get('/actions/getActionByHostEmail/:hostEmail', auth, adminAuth, (req, res) => actionController.getActionByHostEmail(req, res))
// .get('/actions/getActionByRenterEmail/:renterEmail', (req, res) => actionController.getActionByRenterEmail(req, res))
.post('/actions/addAction', auth, (req, res) => actionController.addAction(req, res))
// .delete('/actions/deleteActionByHostEmail/:hostEmail', (req, res) => actionController.deleteActionByHostEmail(req, res))
// .delete('/actions/deleteActionByRenterEmail/:renterEmail', (req, res) => actionController.deleteActionByRenterEmail(req, res));

module.exports = router;