const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    ingredients: [{
        ingredientName: {
            type: String,
            require: true
        },
        ingredientValue: {
            type: String,
            require: true
        },
    }],
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Recipe', recipeSchema);
