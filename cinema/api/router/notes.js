const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { noteController } = require('../controllers');

// middleware that is specific to this router
router.post('/createNote', auth(), noteController.createNote);
router.post('/all', auth(),noteController.getAll);
router.get('/getNote', auth(),noteController.getNote);
router.post('/updateNote', auth(), noteController.updateNote);
router.post('/deleteNote', auth(), noteController.deleteNote);

module.exports = router