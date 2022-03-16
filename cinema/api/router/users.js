const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', auth(), authController.logout);
router.post('/getUserById', auth(), authController.getUserById);


module.exports = router