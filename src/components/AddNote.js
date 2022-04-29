import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Form } from "react-bootstrap";

function AddNote(props) {
    const maxLengthTitle = 50;
    const maxLengthContent = 200;
    const [isDisplay, setIsDisplay] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
        color: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevState => ({ ...prevState, [name]: value }));
    }

    const expand = () => setIsExpanded(true);

    const handleKeyUp = (e) => {
        const counterElement = document.getElementById("lengthCounter")
        counterElement.innerHTML = maxLengthContent - e.target.value.length;

        if (e.target.value.length > 0) {
            setIsDisplay(true);
        } else {
            setIsDisplay(false);
        }
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        setIsExpanded(false);
        setIsDisplay(false);
    }

    return (
        <div className="add-note">
            <Form>
                <Form.Group className="mb-3">
                    {isExpanded && <input className="form-control" name="title" placeholder="Title (Optional)" onChange={handleChange} value={note.title} maxLength={maxLengthTitle} />}
                </Form.Group>
                <Form.Group className="mb-3">
                    <textarea className="form-control" style={{ resize: "none" }} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onClick={expand} onChange={handleChange} onKeyUp={handleKeyUp} value={note.content} maxLength={maxLengthContent} />
                    {isExpanded && <p>Characters left: <span id="lengthCounter">{maxLengthContent}</span></p>}
                </Form.Group>
                <Form.Group className="mb-3">
                    {isExpanded && <Form.Select aria-label="Default select example" name="color" onChange={handleChange} value={note.color}>
                        <option value="#fff">Select color for note (By default is white)</option>
                        <option value="#f6c2d9">Pink</option>
                        <option value="#fff69b">Yellow</option>
                        <option value="#bcdfc9">Green</option>
                        <option value="#a1c8e9">Blue</option>
                        <option value="#e4dae2">Purple</option>
                    </Form.Select>}
                </Form.Group>
                {isDisplay && <button onClick={handleAddNote}><AddIcon /></button>}
            </Form>
        </div>
    );
}

export default AddNote;