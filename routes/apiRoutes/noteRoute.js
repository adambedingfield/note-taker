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

router.delete('/notes/:id', (req, res) => {
    req.body.id = notes.id;
    res.send("DELETE Request Called")
})


module.exports = router;