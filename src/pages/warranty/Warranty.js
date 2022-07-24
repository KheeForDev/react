import React, { useState, useEffect } from "react";

import WarrantyCard from "../../components/WarrantyCard";
import Loading from "../../components/Loading";
import * as constant from "../../util/constant";
import useAuth from "../../hook/useAuth";
import axios from "../../util/axios";

const Warranty = () => {
    const { auth } = useAuth();
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

    return (
        <>
            {!warranties
                ? (
                    // show loading page until data are fetched
                    <Loading />
                )
                : (
                    <div>
                        <h1>Warranties Main</h1>
                        {warranties.map((warranty) => (
                            <WarrantyCard
                                key={warranty.id}
                                id={warranty.id}
                                productName={warranty.productName}
                                brand={warranty.brand}
                            />
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default Warranty;