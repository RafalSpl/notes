const Note = require('../../db/models/note');

class noteActions {
    saveNote(req, res) {

        // const newNote = new Note({
        //     title: 'zrobic zakupy',
        //     body: 'mleko, jajka, woda'
        // });
        
        // newNote.save().then(() => {
        //     console.log('notatka została stworzona');
        // })
        const title = req.body.title;
        const body = req.body.body;
        res.send('notatka zapisana ' + title + body);
    }
    getAllNotes(req, res) {
        //pobieranie wszystkich notatek
        res.send('api dziala')
    }
    getNote(req, res) {
        //pobieranie pojedyńczej notatki
        res.send('pobieranie pojedynczej notatki')
    }
    updateNote(req, res) {
        //edycja notatki
        res.send('edycja  notatki')
    }
    deleteNote(req, res) {
        const id = req.params.id;
        //usuwanie notatki
        res.send('usuwanie notatki ID ' + id) 
    }
}

module.exports = new noteActions();