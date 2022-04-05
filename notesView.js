const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#show-note-button');
    this.inputEl = document.querySelector('#user-input');

    this.buttonEl.addEventListener('click', ()=>{
      this.addNewNote();
      this.displayNotes();
    })
  }

  addNewNote() {
    this.model.addNotes(this.inputEl.value)
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      let noteElement = document.createElement('div')
      noteElement.setAttribute('class', 'note')
      noteElement.innerText = note
      this.mainContainerEl.append(noteElement)
    })
  }
}


module.exports = NotesView;