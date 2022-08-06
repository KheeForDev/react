import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UilEye, UilEdit, UilTrashAlt } from '@iconscout/react-unicons'

import * as constant from "../util/constant";
import useAuth from "../hook/useAuth";
import axios from "../util/axios";
import img_placeholder from "../asserts/images/286x180.jpg";

const WarrantyCard = ({ id, productName, brand, status, statusColorCode, handleDelete }) => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [warranty, setWarranty] = useState({});
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleOpenViewDialog = () => setIsViewDialogOpen(true);
    const handleCloseViewDialog = () => setIsViewDialogOpen(false);
    const handleOpenDeleteDialog = () => setIsDeleteDialogOpen(true);
    const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);

    const handleViewDialog = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_GET + `${id}`,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            setWarranty(response.data);
            handleOpenViewDialog();
        } catch (err) {
            toast.error(err, {
                autoClose: false,
            });
        }
    }

    const handleEdit = () => {
        navigate(`/updatewarranty/${id}`)
    }

    const handleConfirmDelete = () => {
        handleDelete(id);
        handleCloseDeleteDialog();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img_placeholder} />
                <Card.Body>
                    <Card.Title>{productName} <span className="warranty-status" style={{backgroundColor: `${statusColorCode}`, color: "white"}}>{status}</span></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
                    <div className="button-container">
                        <Button variant="secondary" className="button-view" onClick={handleViewDialog}>
                            <UilEye /><br />
                            View
                        </Button>

                        <Button variant="primary" className="button-edit" onClick={handleEdit}>
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

            <Modal show={isViewDialogOpen} onHide={handleCloseViewDialog} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>View Warranty</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    < Form>
                        <Form.Group className="mb-3" controlId="formHorizontalProductName">
                            <FloatingLabel
                                controlId="floatingInputProductName"
                                label="Product Name"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Product Name" name="productName" value={warranty.productName} readOnly />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHorizontalWarrantyCategory">
                            <FloatingLabel
                                controlId="floatingInputWarrantyCategory"
                                label="Warranty Category"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Warranty Category" name="warrantyCategory" value={warranty.warrantyCategoryName} readOnly />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHorizontalBrand">
                            <FloatingLabel
                                controlId="floatingInputBrand"
                                label="Brand"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Brand" name="brand" value={warranty.brand} readOnly />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHorizontalModel">
                            <FloatingLabel
                                controlId="floatingInputModel"
                                label="Model"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Model" name="model" value={warranty.model} readOnly />
                            </FloatingLabel>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formHorizontalStartDate">
                                <FloatingLabel
                                    controlId="floatingInputStartDate"
                                    label="Start Date"
                                    className="mb-3"
                                >
                                    <Form.Control type="date" placeholder="Start Date" name="startDate" value={warranty.startDate} readOnly />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formHorizontalEndDate">
                                <FloatingLabel
                                    controlId="floatingInputEndDate"
                                    label="End Date"
                                    className="mb-3"
                                >
                                    <Form.Control type="date" placeholder="End Date" name="endDate" value={warranty.endDate} min={warranty.startDate} readOnly />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formHorizontalRemark">
                            <FloatingLabel
                                controlId="floatingTextareaRemark"
                                label="Remark"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Remark" name="remark" value={warranty.remark} style={{ height: "150px" }} readOnly />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseViewDialog}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WarrantyCard;