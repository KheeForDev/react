import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Loading from "../../components/Loading";
import * as constant from "../../util/constant";
import useAuth from "../../hook/useAuth";
import axios from "../../util/axios";

const AddWarranty = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const textareaMaxLength = constant.TEXTAREA_MAX_LENGTH;
    const [warrantyCategories, setWarrantyCategories] = useState();
    const [warranty, setWarranty] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const getWarranty = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_GET + `${id}`,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            setWarranty(response.data);
        } catch (err) {
            const { message } = err;
            const { response: { status: statusCode } } = err;

            toast.error(message, {
                autoClose: false,
            });

            if (statusCode === 401 || statusCode === 403) {
                setAuth({});
                navigate("/login");
            };
        }
    }

    const getWarrantyCategories = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_CATEGORIES,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            setWarrantyCategories(response.data);
        } catch (err) {
            const { message } = err;
            const { response: { status: statusCode } } = err;

            toast.error(message, {
                autoClose: false,
            });

            if (statusCode === 401 || statusCode === 403) {
                setAuth({});
                navigate("/login");
            };
        }
    };

    useEffect(() => {
        getWarranty();
        getWarrantyCategories();
    }, []);

    // enable button when all fields are filled up
    useEffect(() => {
        if (warranty.productName !== "" && warranty.warrantyCategory !== "" && warranty.brand !== "" && warranty.model !== "" && warranty.startDate !== "" && warranty.endDate !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [warranty]);

    const handleKeyUp = (e) => {
        const counterElement = document.getElementById("lengthCounter")
        counterElement.innerHTML = textareaMaxLength - e.target.value.length;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setWarranty(prevState => ({ ...prevState, [name]: value }));
    };

    const handleUpdateWarranty = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(constant.API_WARRANTY_UPDATE + `${id}`,
                JSON.stringify(warranty),
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            const { data: message } = response;

            toast.success(message, {
                autoClose: 5000,
            });

            navigate("/warranty");
        } catch (err) {
            const { message } = err;
            const { response: { status: statusCode } } = err;

            toast.error(message, {
                autoClose: false,
            });

            if (statusCode === 401 || statusCode === 403) {
                setAuth({});
                navigate("/login");
            };
        }
    };

    const handleBack = () => {
        navigate("/warranty");
    }

    return (
        <>
            {!warranty || !warrantyCategories
                ? (
                    // show loading page until data are fetched
                    <Loading />
                )
                : (
                    <div className="form-container">
                        <div className="form-warranty">
                            <h1>Update Warranty</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formHorizontalProductName">
                                    <FloatingLabel
                                        controlId="floatingInputProductName"
                                        label="Product Name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Product Name" name="productName" value={warranty.productName} onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formHorizontalWarrantyCategory">
                                    <FloatingLabel
                                        controlId="floatingInputWarrantyCategory"
                                        label="Warranty Category"
                                        className="mb-3"
                                    >
                                        <Form.Select name="warrantyCategory" value={warranty.warrantyCategory} onChange={handleChange} >
                                            <option value="">- Warranty Category -</option>
                                            {warrantyCategories.map(item => {
                                                return (<option key={item.id} value={item.id}>{item.name}</option>);
                                            }
                                            )}
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formHorizontalBrand">
                                    <FloatingLabel
                                        controlId="floatingInputBrand"
                                        label="Brand"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Brand" name="brand" value={warranty.brand} onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formHorizontalModel">
                                    <FloatingLabel
                                        controlId="floatingInputModel"
                                        label="Model"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Model" name="model" value={warranty.model} onChange={handleChange} />
                                    </FloatingLabel>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-3" controlId="formHorizontalStartDate">
                                        <FloatingLabel
                                            controlId="floatingInputStartDate"
                                            label="Start Date"
                                            className="mb-3"
                                        >
                                            <Form.Control type="date" placeholder="Start Date" name="startDate" value={warranty.startDate} onChange={handleChange} />
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formHorizontalEndDate">
                                        <FloatingLabel
                                            controlId="floatingInputEndDate"
                                            label="End Date"
                                            className="mb-3"
                                        >
                                            <Form.Control type="date" placeholder="End Date" name="endDate" value={warranty.endDate} min={warranty.startDate} onChange={handleChange} />
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formHorizontalRemark">
                                    <FloatingLabel
                                        controlId="floatingTextareaRemark"
                                        label="Remark"
                                        className="mb-3"
                                    >
                                        <Form.Control as="textarea" placeholder="Remark" name="remark" value={warranty.remark} onChange={handleChange} onKeyUp={handleKeyUp} maxLength={textareaMaxLength} style={{ height: "150px" }} />
                                    </FloatingLabel>
                                    <p>Characters left: <span id="lengthCounter">{textareaMaxLength}</span></p>
                                </Form.Group>

                                <div className="button-container">
                                    <Button variant="secondary" className="button-back" onClick={handleBack}>
                                        Back
                                    </Button>

                                    <Button variant="primary" className="button-update" onClick={handleUpdateWarranty} disabled={buttonDisabled}>
                                        Update Warranty
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AddWarranty;