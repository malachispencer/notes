const { Note } = require('./note');

class NoteList {
  constructor(noteClass = Note) {
    this.notes = [];
    this.noteClass = noteClass;
  }

  createNote(text) {
    this.notes.push(new this.noteClass(text));
  }

  showNotes() {
    return this.notes;
  }
}

module.exports = { NoteList };