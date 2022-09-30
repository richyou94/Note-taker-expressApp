const notes = require('express').Router();
const path = require('path');
const { readFromFile, readAndAppend } = require('../helper/fsUtils');

notes.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/notes.html'))
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    const { title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;

