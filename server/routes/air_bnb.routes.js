const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const renterController = require('../controllers/renter.controller');

// const bankAccountController = require('../controllers/bank_account.controller');


/* Users Routes: */
router.get('/users/getUsers', (req, res) => userController.getUsers(req, res))
.get('/users/getUserByEmail/:email', (req, res) => userController.getUserByEmail(req, res))
.post('/users/addUser', (req, res) => userController.addUser(req, res))
.patch('/users/updateUserByEmail/:email', (req, res) => userController.updateUserByEmail(req, res))
.delete('/users/deleteUserByEmail/:email', (req, res) => userController.deleteUserByEmail(req, res));


/* Renter Routes: */
router.get('/renters/getRenters', (req, res) => renterController.getRenters(req, res))
.get('/renters/getRenterByEmail/:email', (req, res) => renterController.getRenterByEmail(req, res))
.post('/renters/addRenter', (req, res) => renterController.addRenter(req, res))
.patch('/renters/updateRenterByEmail/:email', (req, res) => renterController.updateRenterByEmail(req, res))
.delete('/renters/deleteRenterByEmail/:email', (req, res) => renterController.deleteRenterByEmail(req, res));


module.exports = router;