const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { movieController } = require('../controllers');

// middleware that is specific to this router

router.get('/', movieController.getLatestsMovies);
router.get('/all', movieController.getAll);
router.post('/favourites', movieController.getFavourites);
router.get('/getMovie/:movieId', movieController.getMovie);
router.put('/edit/:movieId', auth(), movieController.editMovie);

module.exports = router