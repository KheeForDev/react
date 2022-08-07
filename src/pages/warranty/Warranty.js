import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import { UilPlus } from '@iconscout/react-unicons'

import WarrantyCard from "../../components/WarrantyCard";
import Loading from "../../components/Loading";
import * as constant from "../../util/constant";
import useAuth from "../../hook/useAuth";
import axios from "../../util/axios";

const Warranty = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [warranties, setWarranties] = useState();

    const getWarranties = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTIES,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            setWarranties(response.data);
        } catch (err) {
            const { message } = err;
            const { response: { status: statusCode } } = err;

            toast.error(message, {
                autoClose: false,
            });

            if (statusCode === 401 || statusCode === 403) {
                navigate("/login");
            };
        }
    };

    useEffect(() => {
        getWarranties();
    }, []);

    const handleAddWarrantyForm = () => {
        navigate("/addwarranty");
    };

    const deleteWarranty = async (id) => {
        try {
            const response = await axios.delete(constant.API_WARRANTY_DELETE + `${id}`,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            const { data: message } = response;

            toast.success(message, {
                autoClose: 5000,
            });

            getWarranties();
        } catch (err) {
            const { message } = err;
            const { response: { status: statusCode } } = err;

            toast.error(message, {
                autoClose: false,
            });

            if (statusCode === 401 || statusCode === 403) {
                navigate("/login");
            };
        }
    };

    return (
        <>
            {!warranties
                ? (
                    // show loading page until data are fetched
                    <Loading />
                )
                : (
                    <div>
                        <h1>List of Warranties</h1>
                        <div className="button-add-warranty" onClick={handleAddWarrantyForm}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <center><UilPlus size="150" /></center>
                                </Card.Body>
                            </Card>
                        </div>

                        <br />

                        <div className="warranty-container">
                            {warranties.map((warranty) => (
                                <WarrantyCard
                                    key={warranty.id}
                                    id={warranty.id}
                                    productName={warranty.productName}
                                    brand={warranty.brand}
                                    status={warranty.status}
                                    statusColorCode={warranty.statusColorCode}
                                    handleDelete={deleteWarranty}
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Warranty;