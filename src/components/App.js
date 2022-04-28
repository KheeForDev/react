import React, { useState } from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes(prevState => [...prevState, note]);
    toast.success('New note added',
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }

  const updateNote = (id, note) => {
    // Object destructuring to select required key only
    const updatedNote = (({ title, content }) => ({ title, content }))(note);
    setNotes(prevState => prevState.map((note, index) => index === id ? { ...note, ...updatedNote } : note));
  }

  const deleteNote = (id) => {
    setNotes(prevState => prevState.filter((note, index) => index !== id));
    toast.error('Note deleted',
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      <div className="flex-container">
        {notes.map((note, index) =>
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        )}
      </div>

      {/* refer to https://bestofreactjs.com/repo/fkhadra-react-toastify-react-notifications */}
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
