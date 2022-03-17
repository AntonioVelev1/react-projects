const { rateModel, userModel, movieModel } = require('../models');

function createRate(req, res, next) {
    const { rate, userId, movieId } = req.body;

    rateModel.create({ rate, userId, movieId })
        .then((cretaedRate) => {
            return Promise.all([
                cretaedRate,
                userModel.updateOne({ _id: userId }, { $push: { rates: cretaedRate._id } }, { new: true }),
                movieModel.updateOne({ _id: movieId }, { $push: { rates: cretaedRate._id } }, { new: true })
            ])
        })
        .then(([cretaedRate, _u, _m]) => {
            if (cretaedRate) {
                res.status(200).json(cretaedRate);
            }
        })
        .catch(next);
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
    const { rateId, userId, movieId } = req.body;

    return Promise.all([
        rateModel.findOneAndDelete({ _id: rateId, userId, movieId }),
        userModel.updateOne({ _id: userId }, { $pull: { rates: rateId } }),
        movieModel.updateOne({ _id: movieId }, { $pull: { rates: rateId } })
    ])
        .then(([deletedRate, _u, _m]) => {
            if (deletedRate) {
                res.status(200).json(deletedRate);
            }
        })
        .catch(next);
}

module.exports = {
    createRate,
    getRate,
    updateRate,
    deleteRate,
}