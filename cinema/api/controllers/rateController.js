const { rateModel, userModel, movieModel } = require('../models');

function createRate(req, res, next) {
    const { rate, userId, movieId } = req.body;

    rateModel.create({ rate, userId, movieId })
        .then((cretaedRate) => {
            return Promise.all([
                cretaedRate,
                userModel.updateOne({ _id: userId }, { $push: { rates: cretaedRate._id } }, { new: true }),
            ])
        })
        .then(([cretaedRate, _u]) => {
            if (cretaedRate) {
                res.status(200).json(cretaedRate);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
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
    const { rateId, rate} = req.body;

    rateModel.findByIdAndUpdate({ _id: rateId }, { rate: rate }, { new: true })
        .then((updatedRate) => {
            if (updatedRate) {
                res.status(200).json(updatedRate);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteRate(req, res, next) {
    const { rateId, userId, movieId } = req.body;

    return Promise.all([
        rateModel.findOneAndDelete({ _id: rateId }),
        userModel.updateOne({ _id: userId }, { $pull: { rates: rateId } })
    ])
        .then(([deletedRate, _u]) => {
            if (deletedRate) {
                res.status(200).json(deletedRate);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
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