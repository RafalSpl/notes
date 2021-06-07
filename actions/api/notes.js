const Note = require('../../db/models/note');

module.exports = {
    saveNote: function(req, res) {

        const newNote = new Note({
            title: 'zrobic zakupy',
            body: 'mleko, jajka, woda'
        });
        
        newNote.save().then(() => {
            console.log('notatka została zapisana');
        })
        res.send('strona glowna dziala');
    }
}