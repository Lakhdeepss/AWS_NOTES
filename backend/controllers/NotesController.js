const notesModel = require("../models/notesModel");

async function getNotes(req, res) {
    const notes = await notesModel.find();
    res.json(notes);
}

async function postNotes(req, res) {
    const { title, content, date } = req.body;
    const newnote = new notesModel({ title, content, date });
    await newnote.save();
    res.status(201).json(newnote);
}

async function updateNotes(req, res) {
    const id = req.params.id;
    const { title, content, date } = req.body;
    const updatednote = await notesModel.findByIdAndUpdate(id, { title, content, date }, { new: true });
    res.json(updatednote);
}

async function deleteNotes(req, res) {
    const id = req.params.id;
    await notesModel.findByIdAndDelete(id);
    res.json("node deleted Successfully");
    res.status(204).send();
}

async function getNotesById(req, res) {
    const id = req.params.id;
    try {
        const note = await notesModel.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

module.exports = {
    getNotes,
    postNotes,
    updateNotes,
    deleteNotes,
    getNotesById
};
