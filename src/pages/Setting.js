import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

import Loading from "../components/Loading";
import * as constant from "../util/constant";
import useAuth from "../hook/useAuth";
import axios from "../util/axios";

const Setting = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const [warrantyCategories, setWarrantyCategories] = useState();

    const getWarrantyCategories = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_CATEGORIES,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                }
            );

            console.log(response.data);

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
        getWarrantyCategories();
    }, []);

    return (
        <>
            {!warrantyCategories
                ? (
                    // show loading page until data are fetched
                    <Loading />
                )
                : (
                    <div>
                        <h1>Setting</h1>

                        <Alert variant="info">
                            Please note that page is <b><u>read-only</u></b> mode as it is still in-progress.
                        </Alert>

                        <Table striped bordered hover size="sm" style={{ backgroundColor: "white" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th>Created On</th>
                                    <th>Updated By</th>
                                    <th>Updated On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warrantyCategories.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.createdBy}</td>
                                            <td>{item.createdOn}</td>
                                            <td>{item.updatedBy}</td>
                                            <td>{item.updatedOn}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </>
    );
}

export default Setting;