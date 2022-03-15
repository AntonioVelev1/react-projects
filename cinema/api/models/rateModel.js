const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const rateSchema = new mongoose.Schema({
    rate: {
        type: Number,
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    filmId: {
        type: ObjectId,
        ref: "Film"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('rate', rateSchema);