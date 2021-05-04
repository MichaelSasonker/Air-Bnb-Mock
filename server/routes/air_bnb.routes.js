const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const renterController = require('../controllers/renter.controller');
const hostController = require('../controllers/host.controller');
const actionController = require('../controllers/action.controller');
const auth = require('../middleware/auth.middleware');


/* Users Routes: */
router.get('/users/getUsers', (req, res) => userController.getUsers(req, res))
.get('/users/me', auth, (req, res) => userController.getUserDetails(req, res))
.get('/users/getUserByEmail/:email', auth, (req, res) => userController.getUserByEmail(req, res))
.post('/users/addUser', (req, res) => userController.addUser(req, res))
.post('/users/loginUser', (req, res) => userController.loginUser(req, res))
.post('/users/logoutUser', auth, (req, res) => userController.logoutUser(req, res))
.post('/users/logoutAll', auth, (req, res) => userController.logoutAllUsers(req, res))
.patch('/users/updateUserByEmail/:email', (req, res) => userController.updateUserByEmail(req, res))
.delete('/users/deleteUserByEmail/:email', (req, res) => userController.deleteUserByEmail(req, res));

/* Renter Routes: */
router.get('/renters/getRenters', (req, res) => renterController.getRenters(req, res))
.get('/renters/getRenterByEmail/:email', (req, res) => renterController.getRenterByEmail(req, res))
.post('/renters/addRenter', (req, res) => renterController.addRenter(req, res))
.patch('/renters/updateRenterByEmail/:email', (req, res) => renterController.updateRenterByEmail(req, res))
.delete('/renters/deleteRenterByEmail/:email', (req, res) => renterController.deleteRenterByEmail(req, res));

/* Host Routes: */
router.get('/hosts/getHosts', (req, res) => hostController.getHosts(req, res))
.get('/hosts/getHostByEmail/:email', (req, res) => hostController.getHostByEmail(req, res))
.post('/hosts/addHost', (req, res) => hostController.addHost(req, res))
.patch('/hosts/updateHostByEmail/:email', (req, res) => hostController.updateHostByEmail(req, res))
.delete('/hosts/deleteHostByEmail/:email', (req, res) => hostController.deleteHostByEmail(req, res));

/* Action Routes: */
router.get('/actions/getActions', (req, res) => actionController.getActions(req, res))
.get('/actions/getActionByHostEmail/:hostEmail', (req, res) => actionController.getActionByHostEmail(req, res))
.get('/actions/getActionByRenterEmail/:renterEmail', (req, res) => actionController.getActionByRenterEmail(req, res))
.post('/actions/addAction', (req, res) => actionController.addAction(req, res))
.delete('/actions/deleteActionByHostEmail/:hostEmail', (req, res) => actionController.deleteActionByHostEmail(req, res))
.delete('/actions/deleteActionByRenterEmail/:renterEmail', (req, res) => actionController.deleteActionByRenterEmail(req, res));

module.exports = router;