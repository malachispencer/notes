const { NoteList } = require('./noteList');

class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  wrapNoteList() {
    let notesArr = Object.values(this.noteList.showNotes());

    let wrapped = notesArr.map(note => {
      return `<li>${note.text}</li>`;
    });

    return `<ul>${wrapped.join('')}</ul>`;
  }
}

module.exports = { NoteListView };