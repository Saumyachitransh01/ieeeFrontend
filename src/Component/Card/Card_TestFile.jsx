import React from "react";
import Image from "../Images/iot.jpg";

export default function Card_TestFile({ image, title, text, link }) {
    return (
        <div>
            <div class="album py-5 bg-light" id="card">
                <div class="container">
                    <div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src={image} class="img-fluid" alt="" />
                                <div class="card-body" id="box1">
                                    <h4>{title}</h4>
                                    <p class="card-text">{text}</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary">
                                                <a href={link}>
                                                    <span>View</span>
                                                </a>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary">
                                                Enroll
                                            </button>
                                        </div>
                                        <small class="text-muted">
                                            6 hours
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
