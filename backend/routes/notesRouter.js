const express = require('express');
const { getNotes, postNotes, updateNotes, deleteNotes, getNotesById } = require('../controllers/NotesController');

const noteRouter = express.Router();

noteRouter.get('/getNotes', getNotes);
noteRouter.get('/getNotes/:id', getNotesById);
noteRouter.post('/postNotes', postNotes);
noteRouter.put('/updateNotes/:id', updateNotes);
noteRouter.delete('/deleteNotes/:id', deleteNotes);

module.exports = noteRouter;