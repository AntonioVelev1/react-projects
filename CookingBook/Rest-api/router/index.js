const router = require('express').Router();
const users = require('./users');
const themes = require('./themes');
const recipes = require('./resipes');
const likes = require('./likes');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use('/users', users);
router.use('/themes', themes);
router.use('/recipes', recipes);
router.use('/likes', likes);
router.use('/test', test);

module.exports = router;
