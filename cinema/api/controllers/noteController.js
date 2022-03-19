const { userModel, noteModel } = require('../models');

function createNote(req, res, next) {
    const { content, userId, movieId } = req.body;

    noteModel.create({ content, userId, movieId })
        .then((cretaedNote) => {
            return Promise.all([
                cretaedNote,
                userModel.updateOne({ _id: userId }, { $push: { notes: cretaedNote._id } }, { new: true }),
            ])
        })
        .then(([cretaedNote, _u]) => {
            if (cretaedNote) {
                res.status(200).json(cretaedNote);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function getAll(req, res, next) {
    const { userId } = req.body;

    noteModel.find()
        .populate('userId')
        .then(notes => res.json(notes))
        .catch(next);
}

function getNote(req, res, next) {
    const noteId = req.params.noteId;

    noteModel.findById(noteId)
        .then(notes => res.json(notes))
        .catch(next);
}

function updateNote(req, res, next) {
    const { noteId, content } = req.body;

    noteModel.findOneAndUpdate({ _id: noteId }, { content: content }, { new: true })
        .then((updatedNote) => {
            if (updatedNote) {
                res.status(200).json(updatedNote);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteNote(req, res, next) {
    const { noteId, userId } = req.body;

    return Promise.all([
        noteModel.findOneAndDelete({ _id: noteId }),
        userModel.updateOne({ _id: userId }, { $pull: { notes: noteId } })
    ])
        .then(([deletedNote, _u]) => {
            if (deletedNote) {
                res.status(200).json(deletedNote);
            }
            else {
                res.status(401).json({ isSuccessfully: false, message: `Not allowed!` });
            }
        })
        .catch(next);
}

module.exports = {
    createNote,
    getAll,
    getNote,
    updateNote,
    deleteNote
}
