import React from "react";
import web from "../Images/web.jpg";
import "react-bootstrap/dist/react-bootstrap";

export default function Web_Dev() {
    return (
        <div>
            <div className="col-md-12">
                <center>
                    <div className="a">
                        <h2 className="mb-3">#5.WebDevelopment Webinar</h2>
                    </div>

                    <div className="a">
                        <img
                            src={web}
                            alt=""
                            className="img-fluid"
                            width="660"
                            height="345"
                        />
                    </div>
                </center>
                <br />
                <p>
                    Description:Web development is the work involved in
                    developing a website for the Internet or an intranet. Web
                    development can range from developing a simple single static
                    page of plain text to complex web-based internet
                    applications, electronic businesses, and social network
                    services.Web development may be a collaborative effort
                    between departments rather than the domain of a designated
                    department. There are three kinds of web developer
                    specialization: front-end developer, back-end developer, and
                    full-stack developer. Front-end developers are responsible
                    for behavior and visuals that run in the user browser,while
                    back-end developers deal with the servers.
                </p>

                <h3>Topics Covered:</h3>
                <ul>
                    <li>Learn HTML,CSS</li>
                    <li>Geeting started with java script.</li>
                    <li>Creating a sample webpage.</li>
                    <li>Working on servers by using nodejs.</li>
                    <li>Learn Php</li>
                </ul>
                <h3>Eligibility:</h3>
                <p>
                    Anybody and everybody is welcome. If you know nothing about
                    code or markup and want to get started in web development
                    then this will be good for you.
                </p>
                <h3>Skills you will gain:</h3>
                <ul>
                    <li>Discover the basics of how web browsers work</li>
                    <li>Discover how to write solid HTML</li>
                    <li>
                        Discover how to style your content to reflect your
                        vision using CSS
                    </li>
                    <li>
                        Discover the basics of programming which apply in
                        language
                    </li>
                    <li>Discover how to write JavaScript for the browser</li>
                    <li>
                        Discover how to code JavaScript for the server using
                        node.js and Express
                    </li>
                </ul>
                <h3>Prerequisite:</h3>
                <p>None</p>
                <h3>Fee:</h3>
                <ul>
                    <li>IEEE Member(CS): ₹ 30</li>
                    <li>IEEE Member(Non CS): ₹ 50</li>
                    <li>Non IEEE Member: ₹ 80</li>
                </ul>
                <h3>Duration:</h3>
                <p>8 hours (4 hour per day)</p>
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
                <div className="tag-widget post-tag-container mb-5 mt-5">
                    <div className="tagcloud">
                        <a href="#" className="tag-cloud-link">
                            HTML
                        </a>
                        <a href="#" className="tag-cloud-link">
                            CSS
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Java Script
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Nodejs
                        </a>
                        <a href="#" className="tag-cloud-link">
                            PHP
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
