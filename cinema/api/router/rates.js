const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { rateController } = require('../controllers');

router.post('/createRate', auth(), rateController.createRate);
router.post('/getRate', auth(), rateController.getRate);
router.post('/updateRate', auth(), rateController.updateRate);
router.post('/deleteRate', auth(), rateController.deleteRate);

module.exports = router