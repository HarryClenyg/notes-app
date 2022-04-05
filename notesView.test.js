/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 

describe('notes view class', () => {
  let model;
  beforeEach(() => {
    model = new NotesModel
    model.addNotes('Buy milk')
    model.addNotes('Buy cheese')
  })

  it('adds 2 notes to notes model', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NotesView(model)
    view.displayNotes()
    
    expect(document.querySelectorAll('.note').length).toBe(2);
  ;})

  it('allows user to add new notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NotesView(model);
    const inputEl = document.querySelector('#user-input');
    inputEl.value = 'Get bread';
    document.querySelector('#show-note-button').click();
    
    expect(document.querySelectorAll('.note').length).toBe(3);
    expect(document.querySelectorAll('.note')[2].innerText).toEqual('Get bread')
  ;})
  
;})