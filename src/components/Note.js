import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal, Button, Form } from "react-bootstrap";

function Note(props) {
    const maxLengthTitle = 50;
    const maxLengthContent = 200;
    const [updatedNote, setUpdatedNote] = useState(props);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const handleOpenDeleteDialog = () => setIsDeleteDialogOpen(true);
    const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);
    const handleOpenEditDialog = () => setIsEditDialogOpen(true);
    const handleCloseEditDialog = () => setIsEditDialogOpen(false);

    const handleConfirmDelete = () => {
        props.onDelete(props.id);
        handleCloseDeleteDialog();
    }

    const handleConfirmEdit = () => {
        props.onUpdate(props.id, updatedNote);
        handleCloseEditDialog();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedNote(prevState => ({ ...prevState, [name]: value }));
    }

    const handleKeyUp = (e) => {
        const counterElement = document.getElementById("lengthCounter")
        counterElement.innerHTML = maxLengthContent - e.target.value.length;

        if (e.target.value.length > 0) {
            document.getElementById("btnUpdate").disabled = false;
        } else {
            document.getElementById("btnUpdate").disabled = true;
        }
    }

    return (
        <>
            <Card className="m-2" style={{ backgroundColor: props.color, width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                    <p className="create-timestamp">Created On: 2022-04-28 12:00</p>
                    <button className="delete" onClick={handleOpenDeleteDialog}><DeleteIcon /></button>
                    <button className="edit" onClick={handleOpenEditDialog}><EditIcon /></button>
                </Card.Body>
            </Card>

            <Modal show={isDeleteDialogOpen} onHide={handleCloseDeleteDialog} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteDialog}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={isEditDialogOpen} onHide={handleCloseEditDialog} size="md" backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title (Optional)</Form.Label>
                            <input className="form-control" name="title" placeholder="Title (Optional)" onChange={handleChange} value={updatedNote.title} maxLength={maxLengthTitle} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <textarea className="form-control" style={{ resize: "none" }} name="content" placeholder="Take a note..." rows="3" onChange={handleChange} onKeyUp={handleKeyUp} value={updatedNote.content} maxLength={maxLengthContent} />
                            <p>Characters left: <span id="lengthCounter">{maxLengthContent}</span></p>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select aria-label="Default select example" name="color" onChange={handleChange} value={updatedNote.color}>
                                <option value="#fff">Select color for note (By default is white)</option>
                                <option value="#f6c2d9">Pink</option>
                                <option value="#fff69b">Yellow</option>
                                <option value="#bcdfc9">Green</option>
                                <option value="#a1c8e9">Blue</option>
                                <option value="#e4dae2">Purple</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditDialog}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirmEdit} id="btnUpdate">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Note;
