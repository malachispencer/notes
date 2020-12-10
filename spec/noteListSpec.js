const { NoteList } = require('../models/noteList');

describe('NoteList', () => {
  let noteList;

  beforeEach(() => {
    noteList = new NoteList();
  });

  describe('#createNote', () => {
    it('creates a Note then stores it in the notes array', () => {
      noteList.createNote('being sick sucks');
      expect(noteList.showNotes().length).toEqual(1);
    });
  });
});