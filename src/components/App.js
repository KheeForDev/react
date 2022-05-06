import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddNote from "./AddNote";
import Note from "./Note";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../utils/axios";

function App() {
  const [notes, setNotes] = useState([]);

  const getAllNote = async () => {
    console.log("run getAllNote function");

    try {
      const request = await axios.get("/note/getAll");
      console.log(request);
      setNotes(request.data);
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  // if [], only run once when page load
  // if [dependencies], will run if any value inside dependencies has changed
  useEffect(() => {
    console.log("invoke useEffect to run getAllNote function");
    getAllNote();
  }, []);

  const addNote = async (note) => {
    console.log("run addNote function");
    // setNotes((prevState) => [...prevState, note]);

    try {
      const request = await axios.post("/note/add", note);
      console.log(request);
      const { data: message, status: statusCode } = request;

      if (statusCode === 200) {
        toast.success(message, {
          autoClose: 5000,
        });

        getAllNote();
      }
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  const deleteNote = async (id) => {
    console.log("run deleteNote function");
    // setNotes((prevState) => prevState.filter((note, index) => index !== id));

    try {
      const request = await axios.delete(`/note/delete/${id}`);
      console.log(request);
      const { data: message, status: statusCode } = request;

      if (statusCode === 200) {
        toast.success(message, {
          autoClose: 5000,
        });

        getAllNote();
      }
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  const updateNote = async (note) => {
    console.log("run updateNote function");
    // object destructuring to select required key only
    // const updatedNote = (({ title, content, color }) => ({
    //   title,
    //   content,
    //   color,
    // }))(note);

    // setNotes((prevState) =>
    //   prevState.map((note, index) =>
    //     index === id ? { ...note, ...updatedNote } : note
    //   )
    // );

    try {
      const request = await axios.post("/note/update", note);
      console.log(request);
      const { data: message, status: statusCode } = request;

      if (statusCode === 200) {
        toast.success(message, {
          autoClose: 5000,
        });

        getAllNote();
      }
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      <div className="flex-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            color={note.color}
            createdOn={note.createdOn}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>
      <Footer />

      {/* refer to https://bestofreactjs.com/repo/fkhadra-react-toastify-react-notifications */}
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
