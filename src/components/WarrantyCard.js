import React from "react";
import Card from 'react-bootstrap/Card';

import img_placeholder from "../asserts/images/286x180.jpg";

const WarrantyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img_placeholder} />
            <Card.Body>
                <Card.Title>{props.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default WarrantyCard;