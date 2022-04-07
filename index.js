console.log('The notes app is running')

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi')

const model = new NotesModel
const view = new NotesView(model)
const api = new NotesApi

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  view.displayError();
});
