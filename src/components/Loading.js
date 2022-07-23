import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <center>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h1>Loading...</h1>
        </center>
    )
}

export default Loading;