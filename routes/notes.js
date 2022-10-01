const uuid = require('../helper/uuid')
const { readFromFile, writeToFile } = require('../helper/fsUtils');

class Notes {
    read() {
        return readFromFile('./db/db.json');
    }

    write(note) {

        return writeToFile('./db/db.json', note)
    }

    getNotes() {
        return this.read().then((notes) => {
            let storedNotes;

            storedNotes = [].concat(JSON.parse(notes))

            return storedNotes;
        })
    }
    
    addNote(note) {
        const { title, text } = note;

        const newNote = {title, text, id: uuid() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }

    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Notes();

// notes.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, '../public/notes.html'))
//     console.info(`${req.method} request received for notes`);
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// notes.post('/', (req, res) => {
//     console.info(`${req.method} request received to add a note`);
//     console.log(req.body);

//     const { title, text} = req.body;

//     if (req.body) {
//         const newNote = {
//             title,
//             text,
//         };

//         readAndAppend(newNote, './db/db.json');
//         res.json('Note added successfully');
//     } else {
//         res.error('Error in adding note');
//     }
// });

// module.exports = notes;


