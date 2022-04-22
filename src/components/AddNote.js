import React, { useState } from "react";

function AddNote(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevState => ({ ...prevState, [name]: value }));
    }

    const expand = () => {
        setIsExpanded(true);
    }

    return (
        <div>
            <form>
                {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand} onChange={handleChange} value={note.content} />
                {isExpanded && <button onClick={(e) => {
                    e.preventDefault();
                    props.onAdd(note);
                    setNote({
                        title: "",
                        content: ""
                    })
                    setIsExpanded(false);
                }}>Add</button>}
            </form>
        </div>
    );
}

export default AddNote;