const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', auth(), authController.logout);
router.post('/getUserById', auth(), authController.getUserById);
router.post('/addToFavourites', auth(), authController.addToFavourites);
router.post('/removeFromFavourites', auth(), authController.removeFromFavourites);


module.exports = router