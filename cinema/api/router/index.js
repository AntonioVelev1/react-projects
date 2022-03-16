const router = require('express').Router();
const users = require('./users');
const movies = require('./movies');
const rates = require('./rates');

router.use('/users', users);
router.use('/movies', movies);
router.use('/rates', rates);

module.exports = router;
