const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const bankAccountController = require('../controllers/bank_account.controller');


/* Users Routes: */
router.get('/users/getUsers', (req, res) => userController.getUsers(req, res))
.get('/users/getUserByEmail/:Email', (req, res) => userController.getUserByEmail(req, res))
.post('/users/addUser', (req, res) => userController.addUser(req, res));
//delete user!
//update user!



module.exports = router;