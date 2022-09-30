const express = require ('express');
const path = require('path');

const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// app.get('/notes', (req, res) => 
// res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

module.exports = app;

