const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rates: [{
        type: ObjectId,
        ref: "rate"
    }],
    userId: [{
        type: ObjectId,
        ref: "User"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('movie', movieSchema);
