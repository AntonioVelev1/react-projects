const { userModel, themeModel, recipeModel } = require('../models');

function newRecipe(text, userId, themeId) {
    return recipeModel.create({ text, userId, themeId })
        .then(recipe => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { recipes: recipe._id }, $addToSet: { themes: themeId } }),
                themeModel.findByIdAndUpdate({ _id: themeId }, { $push: { recipes: recipe._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
}

function getAll(req, res, next) {
    recipeModel.find()
    .populate('userId')
    .then(recipes => res.json(recipes))
    .catch(next);
}

function getRecipe(req, res, next) {
    const recipeId = req.params.recipeId;

    recipeModel.findById(recipeId)
        .then(recipe => res.json(recipe))
        .catch(next);
}


function getLatestsRecipes(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    recipeModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('themeId userId')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(next);
}

function createRecipes(req, res, next) {
    const { name, description, imageURL, ingredients, userId } = req.body;

    recipeModel.create({ name, description, imageURL, ingredients, userId })
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(next);
    // newRecipe(recipeText, userId, themeId)
    //     .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
    //     .catch(next);
}

function editRecipe(req, res, next) {
    const { recipeId } = req.params;
    const { recipeText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the recipe, the recipe will not be updated
    recipeModel.findOneAndUpdate({ _id: recipeId, userId }, { text: recipeText }, { new: true })
        .then(updatedRecipe => {
            if (updatedRecipe) {
                res.status(200).json(updatedRecipe);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteRecipe(req, res, next) {
    const { recipeId, themeId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        recipeModel.findOneAndDelete({ _id: recipeId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { recipes: recipeId } }),
        themeModel.findOneAndUpdate({ _id: themeId }, { $pull: { recipes: recipeId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function like(req, res, next) {
    const { recipeId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    recipeModel.updateOne({ _id: recipeId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsRecipes,
    getAll,
    getRecipe,
    newRecipe,
    createRecipes,
    editRecipe,
    deleteRecipe,
    like,
}
