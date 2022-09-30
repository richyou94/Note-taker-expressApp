const express = require('express');
const path = require('path');
const noteData = require('./db/db.json')

const app = express();


const PORT = 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());    

app.use(express.static('public'));

// GET request 

app.get('/', (req, res) => res.send('send'));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received to get note`);
    return res.status(200).json(noteData);

});


app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

// POST request
app.post('/api/notes', (req, res) => {

    console.info(req.rawHeaders);

    console.info(`${req.method} request received`);

    let response;

    if(req.body && req.body.title) {
        response = {
            status: 'success',
            data: req.body,
        };
        res.status(201).json(response);
    } else {
        res.status(400).json('Request body must at least contain a title of the note');
    }

    console.log(req.body);
})

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);