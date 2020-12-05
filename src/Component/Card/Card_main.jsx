import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "react-bootstrap/Container";

export default function MediaCard({ image, title, text, link, time }) {
    return (
        <div className="Container">
            <Card style={{ width: "348px", height: "500px", margin: "15px" }}>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                <Card.Body>
                    <Card.Title className="card_title">{title}</Card.Title>
                    <Card.Text style={{ height: "140px" }}>{text}</Card.Text>
                    <Button size="sm" variant="outline-primary" href={link}>
                        View
                    </Button>
                    <Button
                        style={{
                            position: "absolute",
                            right: 10,
                            color: "gray",
                        }}
                        size="sm"
                        variant="outline">
                        {time}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
