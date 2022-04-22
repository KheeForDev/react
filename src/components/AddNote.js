import React, { useState } from "react";

function AddNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevState => ({...prevState, [name]: value }));
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.onAdd(note);
                    setNote({
                        title: "",
                        content: ""
                    })
                }}>Add</button>
            </form>
        </div>
    );
}

export default AddNote;