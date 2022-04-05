console.log('The notes app is running')

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const notes_model = new NotesModel
const view = new NotesView(notes_model)

notes_model.getNotes().forEach(note => console.log(`${note}`))

view.displayNotes()
