const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete("/notes/:id", function (req, res) {
    let note = notes;
    for (let i = 0; i < note.length; i++) {

        if (notes[i].id == req.params.id) {
            notes.splice(i, 1);
            break;
        }
    }
    res.json(note);
});


module.exports = router;