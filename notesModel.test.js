const NotesModel = require('./NotesModel')

describe('notes model class', () => {
  it('should return empty array', () => {
    const model = new NotesModel
    expect(model.getNotes()).toEqual([])
  ;})

  it('should add notes to the notes array', () => {
    const model = new NotesModel
    model.addNotes('Buy milk')
    model.addNotes('Go to the gym')
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  ;})

  it('reset should clear the notes_array', () => {
    const model = new NotesModel
    model.addNotes('Buy milk')
    model.addNotes('Go to the gym')
    model.reset()
    expect(model.getNotes()).toEqual([])
  ;})
  
;})
