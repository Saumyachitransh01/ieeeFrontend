import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function MediaCard({ image, title, text, link, time }) {
    return (
        <div className="Container">
            <Card
                className="cards1"
                style={{
                    // width: "auto",
                    maxWidth: "300px",
                    maxHeight: "500px",

                    // width: "348px",
                    // height: "500px",
                    margin: "15px",
                    borderRadius: "20px",
                }}>
                <Link
                    className="card_link"
                    to={link}
                    style={{ textDecoration: "none" }}>
                    <Card.Img
                        variant="top"
                        src={image}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "20px 20px 0px 0px",
                        }}
                    />
                    <Card.Body>
                        <Card.Title className="card_title">{title}</Card.Title>
                        <Card.Text
                            style={{
                                height: "130px",
                                color: "gray",
                                fontSize: "14px",
                            }}>
                            {text}
                        </Card.Text>
                        <Button
                            size="sm"
                            variant="outline-primary"
                            // href={link}
                            style={{ borderRadius: "13px" }}>
                            View
                        </Button>
                        <Button
                            style={{
                                position: "absolute",
                                right: 10,
                                borderRadius: "20px",
                                color: "gray",
                            }}
                            size="sm"
                            variant="outline">
                            {time}
                        </Button>
                    </Card.Body>
                </Link>
            </Card>
        </div>
    );
}
