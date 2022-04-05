console.log('The notes app is running')

const NotesModel = require('./notesModel')

const notes_model = new NotesModel

notes_model.addNotes('Buy milk')
notes_model.addNotes('Buy cheese')

notes_model.getNotes().forEach(note => console.log(`${note}`))
