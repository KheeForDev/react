import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function AddNote(props) {
    const maxLength = 200;
    const [isDisplay, setIsDisplay] = useState(false);
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

    const handleKeyUp = (e) => {
        const counterElement = document.getElementById("lengthCounter")
        counterElement.innerHTML = maxLength - e.target.value.length;

        if (e.target.value.length > 0) {
            setIsDisplay(true);
        } else {
            setIsDisplay(false);
        }
    }

    return (
        <div>
            <form>
                {isExpanded && <input name="title" placeholder="Title (Optional)" onChange={handleChange} value={note.title} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand} onChange={handleChange} onKeyUp={handleKeyUp} value={note.content} maxLength={maxLength} />
                {isExpanded && <p>Characters left: <span id="lengthCounter">{maxLength}</span></p>}
                {isDisplay && <button onClick={(e) => {
                    e.preventDefault();
                    props.onAdd(note);
                    setNote({
                        title: "",
                        content: ""
                    })
                    setIsExpanded(false);
                }}><AddIcon /></button>}
            </form>
        </div>
    );
}

export default AddNote;