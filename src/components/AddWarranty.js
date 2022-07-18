import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import * as constant from "../util/constant";
import useAuth from "../hook/useAuth";
import axios from "../util/axios";

const Warranty = () => {
    const { auth } = useAuth();

    const [warranty, setWarranty] = useState(
        {
            categories: []
        }
    );
    const [warrantyCategories, setWarrantyCategories] = useState();

    const getWarrantyCategories = async () => {
        try {
            const response = await axios.get(constant.API_WARRANTY_CATEGORIES,
                {
                    headers: { 'Authorization': `Bearer ${auth.accessToken}` }
                });
            console.log(response.data);

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

    return (
        <>
            {!warrantyCategories
                ? (
                    <div>
                        <center>
                            <h1>Loading...</h1>
                        </center>
                    </div>
                )
                : (
                    <div>
                        <h1>Add Warranty</h1>
                        <Form.Select name="color" onChange={handleChange} >
                            {warrantyCategories.map(item => {
                                return (<option key={item.id} value={item.id}>{item.name}</option>);
                            }
                            )}
                        </Form.Select>
                    </div>
                )
            }
        </>
    );
}

export default Warranty;