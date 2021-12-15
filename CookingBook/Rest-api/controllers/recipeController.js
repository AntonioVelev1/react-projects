const { userModel, themeModel, recipeModel } = require('../models');

function newRecipe(recipeId, userId) {
    return recipeModel.findOne({ _id: recipeId })
        .then((recipe) => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { recipes: recipeId } })
                //themeModel.findByIdAndUpdate({ _id: themeId }, { $push: { recipes: recipe._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
};

function getAll(req, res, next) {
    recipeModel.find()
        .populate('userId')
        .then(recipes => res.json(recipes))
        .catch(next);
}

function getMyRcipes(req, res, next) {
    const { userId } = req.body;

    recipeModel.find({userId : {_id : userId}})
        .sort({ created_at: -1 })
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
            console.log(recipe);
            console.log(recipe.id);
            newRecipe(recipe.id, userId)
                .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
        })
        .catch(next);
}

function editRecipe(req, res, next) {
    const { recipeId } = req.params;
    const { name, description, ingredients, userId } = req.body;

    // if the userId is not the same as this one of the recipe, the recipe will not be updated
    recipeModel.findOneAndUpdate({ _id: recipeId, userId }, { name, description, ingredients }, { new: true })
        .then(updatedRecipe => {
            if (updatedRecipe) {
                res.status(200).json(updatedRecipe);
            }
            else {
                res.status(401).json({ isSuccessfully:false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteRecipe(req, res, next) {
    const { recipeId } = req.params;
    const { userId } = req.body;

    Promise.all([
        recipeModel.findOneAndDelete({ _id: recipeId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { recipes: recipeId } }),
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
    const { userId } = req.body;

    console.log('like')

    recipeModel.updateOne({ _id: recipeId }, { $addToSet: { likes: userId } }, { new: true })
        .then((likedRecipe) => {
             res.status(200).json({ message: 'Liked successful!' }) })
        .catch(next)
}

function unlike(req, res, next) {
    const { recipeId } = req.params;
    const { userId } = req.body;

    console.log('like')

    recipeModel.updateOne({ _id: recipeId }, { $pull: { likes: userId } }, { new: true })
        .then((likedRecipe) => {
             res.status(200).json({ message: 'Uniked successful!' }) })
        .catch(next)
}

module.exports = {
    getLatestsRecipes,
    getAll,
    getMyRcipes,
    getRecipe,
    newRecipe,
    createRecipes,
    editRecipe,
    deleteRecipe,
    like,
    unlike
}
