const { NoteListView } = require('../models/noteListView');

describe('NoteListView', () => {
  let noteListView;
  let noteListMock;

  beforeEach(() => {
    noteListMock = {
      notes: [
        { text: 'COVID'},
        { text: 'Arteta Out'},
        { text: 'Takeaway'}
      ],
      showNotes: function() {
        return this.notes;
      }
    }

    noteListView = new NoteListView(noteListMock);
  });

  describe('#wrapNoteList', () => {
    it('takes a NoteList object and wraps it in HTML to form an unordered list', () => {
      const htmlString = '<ul><li>COVID</li><li>Arteta Out</li><li>Takeaway</li></ul>';
      expect(noteListView.wrapNoteList()).toEqual(htmlString);
    });
  });
});