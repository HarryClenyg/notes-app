/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  it('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify([{
      noteText: 'This note is coming from the server'
    }]))
    api.loadNotes('note', (noteInfo) => {
      expect(noteInfo.noteText).toBe('This note is coming from the server');
    });
  ;})
;})
