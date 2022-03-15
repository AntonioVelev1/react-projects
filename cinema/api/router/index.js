const router = require('express').Router();
const users = require('./users');
const films = require('./films');
const rates = require('./rates');

router.use('/users', users);
router.use('/films', films);
router.use('/rates', rates);

module.exports = router;
