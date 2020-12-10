const express = require('express');
const { NoteList } = require('./models/noteList');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

let noteList = new NoteList;

app.get('/', (req, res) => {
  res.render('notes');
});

app.post('/', (req, res) => {
  noteList.createNote(req.body.noteText);
  res.send(noteList.showNotes());
});

app.get('/initialize', (req, res) => {
  res.send(noteList.showNotes());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
