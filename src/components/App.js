import React, { useState } from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import Footer from './Footer';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes(prevState => [...prevState, note]);
  }

  const deleteNote = (id) => {
    setNotes(prevState => prevState.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => 
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
