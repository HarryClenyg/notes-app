class NotesApi {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteText = document.querySelector('#user-input');
  }

  loadNotes(callback, reject) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(notes => {
        callback(notes);
        })
      .catch(error => {
          reject(error);
      });
  }
  // async loadNotes2() {
  //   let res = await fetch('http://localhost:3000/notes')
  //   let notes = await res.json();
  //   return notes
  // }

  createNote(callback) {
    const note = { content: this.noteText.value };

    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
    .then(response => response.json())
    .then(note => {
      console.log('Success:', note);
      callback(note);
    })
  }
}

module.exports = NotesApi;
