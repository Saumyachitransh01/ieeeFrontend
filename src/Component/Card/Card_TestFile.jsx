import React from "react";

export default function Card_TestFile({ image, title, text, link }) {
    return (
        <div>
            <div className="album py-5 bg-light" id="card">
                <div className="container">
                    <div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={image} className="img-fluid" alt="" />
                                <div className="card-body" id="box1">
                                    <h4>{title}</h4>
                                    <p className="card-text">{text}</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary">
                                                <a href={link}>
                                                    <span>View</span>
                                                </a>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary">
                                                Enroll
                                            </button>
                                        </div>
                                        <small className="text-muted">
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
