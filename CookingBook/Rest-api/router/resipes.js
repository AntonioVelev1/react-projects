const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', recipeController.getLatestsRecipes);
router.get('/all', recipeController.getAll);
router.post('/myRecipes', auth(), recipeController.getMyRcipes);
router.post('/create', auth(), recipeController.createRecipes);
router.put('/edit/:recipeId', auth(), recipeController.editRecipe);
router.get('/details/:recipeId', recipeController.getRecipe);
router.delete('/delete/:recipeId', auth(), recipeController.deleteRecipe);

router.put('/:recipeId',  auth(),recipeController.like);
router.put('/unlike/:recipeId', auth(), recipeController.unlike);

module.exports = router