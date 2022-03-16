const { rateModel, userModel, movieModel } = require('../models');

function createRate(req, res, next) {
    const { rate, userId, movieId } = req.body;

    return rateModel.create({ rate, userId, movieId })
        .then(cretaedRate => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { rates: cretaedRate._id }, $addToSet: { movies: movieId } }),
                movieModel.findByIdAndUpdate({ _id: movieId }, { $push: { rates: cretaedRate._id } }, { new: true })
            ])
        })
}

function getRate(req, res, next) {
    const { userId, movieId } = req.body;

    rateModel.findOne({ userId: userId, movieId: movieId })
        .then(rate => res.json(rate))
        .catch(next);
}


function updateRate(req, res, next) {
    const { rateId, rate, userId, movieId } = req.body;

    Promise.all([
        rateModel.findByIdAndUpdate({ _id: rateId }, { rate: rate }, { new: true }),
        userModel.updateOne({ _id: userId }, { $push: { rates: rateId }, $addToSet: { movies: movieId } }),
        movieModel.updateOne({ _id: movieId }, { $push: { rates: rateId } })
    ])
        .then(([updatedRate, _u, _m]) => {
            if (updatedRate) {
                res.status(200).json(updatedRate);
            }
        })
        .catch(next);
}

function deleteRate(req, res, next) {

}

module.exports = {
    createRate,
    getRate,
    updateRate,
    deleteRate,
}