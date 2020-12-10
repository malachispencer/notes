document.addEventListener('DOMContentLoaded', () => {

  const noteForm = document.getElementById('note-submit-form');
  const noteContainer = document.getElementById('note-container');

  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const object = { 
      noteText: e.target[0].value 
    };

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(res => res.json())
    .then(data => console.log(data))

  });

  // function displayNotes(notes) {
  //   notes.forEach(note => {
  //     noteContainer.append(wrapNote(note));
  //   });
  // }

});