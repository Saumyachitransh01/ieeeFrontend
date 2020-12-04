import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "react-bootstrap/Container";

export default function MediaCard({ image, title, text, link }) {
    return (
        <div className="Container">
            <Card style={{ width: "348px", margin: "20px" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button size="sm" variant="primary" href={link}>
                        View
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
