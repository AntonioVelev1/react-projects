const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', recipeController.getLatestsRecipes);
router.get('/all', recipeController.getAll);
router.post('/myRecipes', recipeController.getMyRcipes);
router.post('/create', recipeController.createRecipes);
router.put('/edit/:recipeId', recipeController.editRecipe);
router.get('/details/:recipeId', recipeController.getRecipe);
router.delete('/delete/:recipeId', recipeController.deleteRecipe);

module.exports = router