const { userModel, filmModel } = require('../models');

function getAll(req, res, next) {
    filmModel.find()
        .populate('userId')
        .then(films => res.json(films))
        .catch(next);
}

function getFilm(req, res, next) {
    const { filmId } = req.body;

    filmModel.findById(filmId)
        .then(films => res.json(films))
        .catch(next);
}

function getLatestsfilms(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    filmModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('userId')
        .then(films => {
            res.status(200).json(films)
        })
        .catch(next);
}

function editfilm(req, res, next) {
    const { filmId } = req.params;
    const { name, description, userId } = req.body;

    // if the userId is not the same as this one of the film, the film will not be updated
    filmModel.findOneAndUpdate({ _id: filmId, userId }, { name, description }, { new: true, runValidators: true })
        .then(updatedfilm => {
            if (updatedfilm) {
                res.status(200).json(updatedfilm);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}


module.exports = {
    getLatestsfilms,
    getAll,
    getFilm,
    editfilm,
}
