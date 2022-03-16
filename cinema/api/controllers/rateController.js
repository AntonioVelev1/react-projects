const { rateModel, userModel, movieModel } = require('../models');

function createRate(req, res, next) {
    return rateModel.create({ rate, userId, movieId })
        .then(rate => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { rates: rate._id }, $addToSet: { movies: movieId } }),
                movieModel.findByIdAndUpdate({ _id: movieId }, { $push: { rates: rate._id } }, { new: true })
            ])
        })
}

function getRate(req, res, next) {

}

function updateRate(req, res, next) {

}

function deleteRate(req, res, next) {

}

module.exports = {
    createRate,
    getRate,
    updateRate,
    deleteRate,
}