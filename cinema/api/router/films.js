const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { filmController } = require('../controllers');

// middleware that is specific to this router

router.get('/', filmController.getLatestsfilms);
router.get('/all', filmController.getAll);
router.post('/myfilms', auth(), filmController.getMyFilm);
router.put('/edit/:filmId', auth(), filmController.editfilm);



module.exports = router