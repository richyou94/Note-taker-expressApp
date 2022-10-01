const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const html = require('./routes/html')

// const uuid = require('./helper/uuid')
const app = express();
const PORT = process.env.PORT || 3001;



//Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());    
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);



// // GET request 

// app.get('/', (req, res) => res.send('send'));

// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

// app.get('/api/notes', (req, res) => {
//     console.info(`${req.method} request received to get note`);
//     return res.status(200).json(noteData);

// });


// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// );

// // POST request
// app.post('/api/notes', (req, res) => {

//     console.info(`${req.method} request received`);

//     const { title, text } = req.body;

//     if (title && text) {
//         const newNotes = {
//             title,
//             text,
//         };

//         fs.readFile('./db/db.json', 'utf8', (err, data) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 const parsedNotes = JSON.parse(data);

//                 parsedNotes.push(newNotes);

//                 fs.writeFile(
//                     './db/db.json',
//                     JSON.stringify(parsedNotes, null, 4),
//                     (writeErr) =>
//                         writeErr
//                             ? console.error(writeErr)
//                             : console.info('successfully updated Notes')
//                 );
//             }
//         });

//         const response = {
//             status: 'success',
//             body: newNotes,
//         };

//         console.log(response);
//         res.status(201).json(response);
//     } else {
//         res.status(500).json('Error in saving notes');
//     }
// });

