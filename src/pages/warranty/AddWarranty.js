import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Loading from "../../components/Loading";
import * as constant from "../../util/constant";
import useAuth from "../../hook/useAuth";
import axios from "../../util/axios";

const Warranty = () => {
    const { auth } = useAuth();
    const [warrantyCategories, setWarrantyCategories] = useState();
    const [warranty, setWarranty] = useState({});

    const getWarrantyCategories = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_CATEGORIES,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            setWarrantyCategories(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getWarrantyCategories();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWarranty(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddWarranty = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(constant.API_WARRANTY_ADD,
                JSON.stringify(warranty),
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {!warrantyCategories
                ? (
                    <Loading />
                )
                : (
                    <div>
                        <h1>Add Warranty</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formHorizontalProductName">
                                <Form.Label column sm={2}>
                                    Product Name
                                </Form.Label>
                                <Form.Control type="text" placeholder="Product Name" name="productName" value={warranty.productName} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalWarrantyCategory">
                                <Form.Label column sm={2}>
                                    Warranty Category
                                </Form.Label>

                                <Form.Select name="warrantyCategory" value={warranty.warrantyCategory} onChange={handleChange} >
                                    <option value="">- Warranty Category -</option>
                                    {warrantyCategories.map(item => {
                                        return (<option key={item.id} value={item.id}>{item.name}</option>);
                                    }
                                    )}
                                </Form.Select>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalBrand">
                                <Form.Label column sm={2}>
                                    Brand
                                </Form.Label>
                                <Form.Control type="text" placeholder="Brand" name="brand" value={warranty.brand} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalModel">
                                <Form.Label column sm={2}>
                                    Model
                                </Form.Label>
                                <Form.Control type="text" placeholder="Model" name="model" value={warranty.model} onChange={handleChange} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" controlId="formHorizontalStartDate">
                                    <Form.Label column sm={2}>
                                        Start Date
                                    </Form.Label>
                                    <Form.Control type="date" placeholder="Start Date" name="startDate" value={warranty.startDate} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="formHorizontalEndDate">
                                    <Form.Label column sm={2}>
                                        End Date
                                    </Form.Label>
                                    <Form.Control type="date" placeholder="End Date" name="endDate" value={warranty.endDate} onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formHorizontalRemark">
                                <Form.Label column sm={2}>
                                    Remark
                                </Form.Label>
                                <Form.Control type="text" placeholder="Remark" name="remark" value={warranty.remark} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Button onClick={handleAddWarranty}>Add Warranty</Button>
                            </Form.Group>
                        </Form>
                    </div>
                )
            }
        </>
    );
}

export default Warranty;