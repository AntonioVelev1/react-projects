const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { themeController, recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', themeController.getThemes);
router.post('/', auth(), themeController.createTheme);

router.get('/:themeId', themeController.getTheme);
router.post('/:themeId', auth(), recipeController.createRecipes);
router.put('/:themeId', auth(), themeController.subscribe);
router.put('/:themeId/recipes/:recipeId', auth(), recipeController.editRecipe);
router.delete('/:themeId/recipes/:recipeId', auth(), recipeController.deleteRecipe);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router