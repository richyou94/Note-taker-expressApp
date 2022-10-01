const router = require('express').Router();
const notes = require('./notes');

router.get('/notes', (req, res) => {
    notes
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    notes  
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    notes
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true}))
        .catch((err) => res.status(500).json(err));
});
// app.get('/notes', (req, res) => 
// res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

module.exports = router;

