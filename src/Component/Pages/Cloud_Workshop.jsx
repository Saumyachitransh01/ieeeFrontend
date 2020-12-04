import React from "react";
import Cloud from "../Images/cloud.jpg";
import "react-bootstrap/dist/react-bootstrap";

export default function Cloud_Workshop() {
    return (
        <div>
            <div className="col-md-12">
                <div className="a">
                    <h2 className="mb-3">#1.Cloud Workshop</h2>
                </div>

                <div className="a">
                    <img src={Cloud} alt="" className="img-fluid" />
                </div>
                <br />
                <p>
                    Description:Cloud Computing is the use of hardware and
                    software to deliver a service over a network (typically the
                    Internet). With cloud computing, users can access files and
                    use applications from any device that can access the
                    Internet.While these "clouds" are the natural evolution of
                    traditional data centers, they are distinguished by exposing
                    resources (computation, data, and applications) as
                    standards-based Webservices and following a "utility"
                    pricing model where customers are charged based on their
                    utilization of computational resources, storage, and
                    transfer of data.
                </p>
                <p>
                    <h3>Topics Covered:</h3>
                    <ul>
                        <li>Introduction to Cloud Computing</li>
                        <li>SaaS, PaaS, IaaS models</li>
                        <li>Introduction to Amazon Web Services</li>
                        <li>
                            Developing Applications on AWS - Static sites using
                            S3, Cloudfront, Secure Certificate
                        </li>
                        <li>
                            Developing Applications on AWS - Dynamic sites using
                            EC2, RDS
                        </li>
                        <li>
                            Introduction to advanced Cloud Computing Features -
                            Serverless Architecture, API Gateway, Cognito etc
                        </li>
                    </ul>
                    <h3>Eligibility:</h3>
                    <p>
                        Anybody interested in Cloud Computing Technologies, Web
                        Development, Site and Server administration.
                    </p>
                    <h3>Skills you will gain:</h3>
                    <ul>
                        <li>Applications on AWS </li>
                        <li>Virtualisation</li>
                        <li>Web Services And API.</li>
                    </ul>
                    <h3>Prerequisite:</h3>
                    <p>Database skills,Programming skills,Linux</p>
                    <h3>Fee:</h3>
                    <ul>
                        <li>IEEE Member(CS): ₹ 70</li>
                        <li>IEEE Member(Non CS): ₹ 80</li>
                        <li>Non IEEE Member: ₹ 100</li>
                    </ul>
                    <h3>Duration:</h3>
                    <p>8 hours (Four hour per day)</p>
                    <h3>Certificate Provided:</h3>
                    <p>Yes</p>
                    <h3>Note:</h3>
                    <ul>
                        <li>
                            Relevant links will be sent via email after
                            registration.
                        </li>
                        <li>Tickets are NON REFUNDABLE</li>
                        <li>Laptops are required but not mandatory to bring</li>
                        <li>No flaming. No flooding. No spamming.</li>
                    </ul>
                    <h1>
                        <b className="text-muted">
                            <button type="button" className="btn btn-primary">
                                Register Here
                            </button>
                        </b>
                    </h1>
                </p>
                <div className="tag-widget post-tag-container mb-5 mt-5">
                    <div className="tagcloud">
                        <a href="#" className="tag-cloud-link">
                            AWS
                        </a>
                        <a href="#" className="tag-cloud-link">
                            API
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Tech
                        </a>
                        <a href="#" className="tag-cloud-link">
                            EC2
                        </a>
                    </div>
                </div>

                {/* <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className="bg-light p-4">
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" className="form-control" id="name">
                    </div>
                    <div className="form-group">
                        <label for="email">Email *</label>
                        <input type="email" className="form-control" id="email">
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input type="url" className="form-control" id="website">
                    </div>

                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary">
                    </div>

                </form>
            </div> */}
            </div>
        </div>
        // </div>
    );
}
