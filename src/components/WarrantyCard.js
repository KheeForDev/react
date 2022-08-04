import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UilEye, UilEdit, UilTrashAlt } from '@iconscout/react-unicons'

import img_placeholder from "../asserts/images/286x180.jpg";

const WarrantyCard = ({ id, productName, brand, handleView, handleEdit, handleDelete }) => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const handleOpenDeleteDialog = () => setIsDeleteDialogOpen(true);
    const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);

    const handleConfirmDelete = () => {
        handleDelete(id);
        handleCloseDeleteDialog();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img_placeholder} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
                    <div className="button-container">
                        <Button variant="secondary" className="button-view" onClick="">
                            <UilEye /><br />
                            View
                        </Button>

                        <Button variant="primary" className="button-edit" onClick="">
                            <UilEdit /><br />
                            Edit
                        </Button>

                        <Button variant="danger" className="button-delete" onClick={handleOpenDeleteDialog}>
                            <UilTrashAlt /><br />
                            Delete
                        </Button>
                    </div>
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
        </>
    );
}

export default WarrantyCard;