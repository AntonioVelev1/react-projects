const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', recipeController.getLatestsRecipes);
router.get('/all', recipeController.getAll);
router.post('/create', recipeController.createRecipes);

module.exports = router