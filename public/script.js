document.addEventListener('DOMContentLoaded', () => {

  const noteForm = document.getElementById('note-submit-form');
  const noteFormText = document.getElementById('note-text');
  const notesContainer = document.getElementById('notes-container');

  getNotesOnStartup();

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

  function getNotesOnStartup() {
    fetch('/initialize')
      .then(res => res.json())
      .then(data => { 
        if (!data.length) {
          let pTag = document.createElement('p');
          pTag.innerText = 'You have no notes';
          notesContainer.append(pTag);
        } else {
          displayNotes(data);
        }
      })
  }

  function displayNotes(notes) {
    notesContainer.innerHTML = '';
    const ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'notes-list-ul');

    notes.forEach(note => {
      let liTag = document.createElement('li');
      liTag.textContent = note.text;
      ulTag.append(liTag);
      ulTag.append(document.createElement('br'));
    });

    notesContainer.append(ulTag);
  }
  
});