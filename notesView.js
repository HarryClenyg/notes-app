const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
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