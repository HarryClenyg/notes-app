
class NotesModel {
  constructor() {
    this.notes_array = []
  }

  getNotes() {
    return this.notes_array
  }

  addNotes(note) {
    return this.notes_array.push(note)
  }

  reset() {
    this.notes_array = []
  }

}

module.exports = NotesModel;