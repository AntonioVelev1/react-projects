const router = require('express').Router();
const users = require('./users');
const notes = require('./notes');
const rates = require('./rates');

router.use('/users', users);
router.use('/notes', notes);
router.use('/rates', rates);

module.exports = router;
