const { userModel, movieModel } = require('../models');

function getAll(req, res, next) {
    movieModel.find()
        .populate('userId')
        .then(movies => res.json(movies))
        .catch(next);
}

function getFavourites(req, res, next) {
    const { userId } = req.body;

    movieModel.find({ userId: { _id: userId } })
        .sort({ created_at: -1 })
        .then(movies => res.json(movies))
        .catch(next);
}

function getMovie(req, res, next) {
    const movieId = req.params.movieId;

    movieModel.findById(movieId)
        .then(movies => res.json(movies))
        .catch(next);
}

function getLatestsMovies(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    movieModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('userId')
        .then(movies => {
            res.status(200).json(movies)
        })
        .catch(next);
}

function editMovie(req, res, next) {
    const { movieId } = req.params;
    const { name, description, userId } = req.body;

    // if the userId is not the same as this one of the movie, the movie will not be updated
    movieModel.findOneAndUpdate({ _id: movieId, userId }, { name, description }, { new: true, runValidators: true })
        .then(updatedmovie => {
            if (updatedmovie) {
                res.status(200).json(updatedmovie);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function addToFavourites(req, res, next) {
    const { movieId } = req.params;
    const { userId } = req.body;

    Promise.all([
        userModel.updateOne({ _id: userId }, { $push: { movies: movieId }, }),
        movieModel.findByIdAndUpdate({ _id: movieId }, { $push: { userId: userId } }, { new: true })
    ])
        .then(([_, movie]) => {
            if (movie) {
                res.status(200).json(movie);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function removeFromFavourites(req, res, next) {
    const { movieId } = req.params;
    const { userId } = req.body;

    Promise.all([
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { movies: movieId } }),
        movieModel.findOneAndUpdate({ _id: movieId }, { $pull: { userId: userId } }, { new: true }),
    ])
        .then(([_, updatedMovie]) => {
            if (updatedMovie) {
                res.status(200).json(updatedMovie)
            } else {
                res.status(401).json({ message: 'Not allowed!' });
            }
        })
        .catch(next);
}


module.exports = {
    getLatestsMovies,
    getAll,
    getFavourites,
    getMovie,
    editMovie,
    addToFavourites,
    removeFromFavourites
}
