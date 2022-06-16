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
  const [colors, setColors] = useState([]);

  const getAllNote = async () => {
    console.log("run getAllNote function");

    try {
      const response = await axios.get("/note/getAll");
      console.log(response);
      setNotes(response.data);
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  const getAllColorCode = async () => {
    console.log("run getAllColorCode function");

    try {
      const response = await axios.get("/color/getAll");
      console.log(response);
      setColors(response.data);
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
    console.log("invoke useEffect to run required functions");
    getAllNote();
    getAllColorCode();
  }, []);

  const addNote = async (note) => {
    console.log("run addNote function");
    // setNotes((prevState) => [...prevState, note]);

    try {
      const response = await axios.post("/note/add", note);
      console.log(response);
      const { data: message } = response;

      toast.success(message, {
        autoClose: 5000,
      });
      getAllNote();
    } catch (err) {
      console.log(err);
      const { message, response } = err;

      toast.error(<div>{message}<br /> {response.data}</div>, {
        autoClose: false,
      });
    }
  };

  const deleteNote = async (id) => {
    console.log("run deleteNote function");
    // setNotes((prevState) => prevState.filter((note, index) => index !== id));

    try {
      const response = await axios.delete(`/note/delete/${id}`);
      console.log(response);
      const { data: message } = response;

      toast.success(message, {
        autoClose: 5000,
      });
      getAllNote();
    } catch (err) {
      console.log(err);
      const { message } = err;

      toast.error(message, {
        autoClose: false,
      });
    }
  };

  const updateNote = async (id, note) => {
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
      const response = await axios.put(`/note/update/${id}`, note);
      console.log(response);
      const { data: message } = response;

      toast.success(message, {
        autoClose: 5000,
      });              
      getAllNote();
    } catch (err) {
      console.log(err);
      const { message, response } = err;

      toast.error(<div>{message}<br /> {response.data}</div>, {
        autoClose: false,
      });
    }
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} colors={colors} />
      <div className="flex-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            color={note.color}
            createdBy={note.createdBy}
            createdOn={note.createdOn}
            colors={colors}
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
