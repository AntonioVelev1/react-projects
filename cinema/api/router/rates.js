const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { rateController } = require('../controllers');

// middleware that is specific to this router

router.post('/createRate', auth(), rateController.createRate);
router.post('/getRate', auth(), rateController.getRate);
router.post('/updateRate', auth(), rateController.updateRate);
router.post('/delete/:rateId', auth(), rateController.deleteRate);

module.exports = router