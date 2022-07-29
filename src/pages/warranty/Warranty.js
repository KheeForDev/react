import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

            // console.log(response);
            setWarranties(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getWarranties();
    }, [])

    const handleAddWarrantyForm = () => {
        navigate("/addwarranty");
    }

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