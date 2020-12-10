const { Note } = require('../models/note');

describe('NoteModel', () => {
  describe('#showText', () => {
    it('returns the text passed in to the Note on instantiation', () => {
      const note = new Note(`Being sick is not nice`);
      expect(note.showText()).toEqual('Being sick is not nice');
    });
  });
});