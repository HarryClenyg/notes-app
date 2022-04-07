const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#show-note-button');
    this.inputEl = document.querySelector('#user-input');

    this.buttonEl.addEventListener('click', ()=>{
      const api = new NotesApi;
      api.createNote(() => api.loadNotes(notes => {
        model.setNotes(notes);
        this.displayNotes();
      }))
    })
  }

  displayNotes() {
    // clear current list
    document.querySelectorAll(".note").forEach(e => e.remove());
    // write new list
    this.model.getNotes().forEach(note => {
      let noteElement = document.createElement('div')
      noteElement.setAttribute('class', 'note')
      noteElement.innerText = note
      this.mainContainerEl.append(noteElement)
    })
    this.inputEl.value = null
  }

  displayError() {
    let errorElement = document.createElement('div')
    errorElement.setAttribute('class', 'error')
    errorElement.innerText = 'Oops, something went wrong!'
    this.mainContainerEl.append(errorElement);
  }
}


module.exports = NotesView;