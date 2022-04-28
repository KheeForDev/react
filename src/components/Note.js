import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal, Button, Form } from "react-bootstrap";

function Note(props) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const handleOpenDeleteDialog = () => setIsDeleteDialogOpen(true);
    const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);
    const handleOpenEditDialog = () => setIsEditDialogOpen(true);
    const handleCloseEditDialog = () => setIsEditDialogOpen(false);
    const handleConfirmDelete = () => props.onDelete(props.id);
    const handleConfirmEdit = () => console.log(props.id);

    return (
        <>
            <Card className="m-2" style={{ borderColor: "red", width: '18rem' }}>
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title (Optional)</Form.Label>
                            <Form.Control autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditDialog}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirmEdit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Note;
