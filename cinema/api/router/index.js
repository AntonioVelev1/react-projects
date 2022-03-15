const router = require('express').Router();
const users = require('./users');
const films = require('./films');

router.use('/users', users);
router.use('/films', films);

module.exports = router;
