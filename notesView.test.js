/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 

describe('notes view class', () => {
  it('adds 2 notes to notes model', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel
    model.addNotes('Buy milk')
    model.addNotes('Buy cheese')
    const view = new NotesView(model)
    view.displayNotes()
    
    expect(document.querySelectorAll('.note').length).toBe(2);
  ;})
;})