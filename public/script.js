document.addEventListener('DOMContentLoaded', () => {

  const noteForm = document.getElementById('note-submit-form');
  const notesListUL = document.getElementById('notes-list-ul');
  const noteFormText = document.getElementById('note-text');

  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const object = { 
      noteText: e.target[0].value 
    };

    noteFormText.value = '';

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(res => res.json())
    .then(data => { 
      displayNotes(data);
    })
  });

  function displayNotes(notes) {
    notesListUL.innerHTML = '';

    notes.forEach(note => {
      let li = document.createElement('li');
      li.textContent = note.text;
      notesListUL.append(li);
    });
  }
  
});