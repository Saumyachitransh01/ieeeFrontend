import React from "react";
import IOT_img from "../Images/iot.jpg";
import "react-bootstrap/dist/react-bootstrap";

export default function IOT() {
    return (
        <div>
            <div className="col-md-12">
                <center>
                    <div className="a">
                        <h2 className="mb-3">3. IOT Workshop</h2>
                        <img
                            src={IOT_img}
                            alt=""
                            className="img-fluid"
                            width="660"
                            height="345"
                        />
                    </div>
                </center>
                <br />
                <p>
                    Description:The Internet of Things, or IoT, refers to the
                    billions of physical devices around the world that are now
                    connected to the internet, all collecting and sharing data.
                    Thanks to the arrival of super-cheap computer chips and the
                    ubiquity of wireless networks, it's possible to turn
                    anything, from something as small as a pill to something as
                    big as an aeroplane, into a part of the IoT. Connecting up
                    all these different objects and adding sensors to them adds
                    a level of digital intelligence to devices that would be
                    otherwise dumb, enabling them to communicate real-time data
                    without involving a human being.The Internet of Things is
                    making the fabric of the world around us more smarter and
                    more responsive, merging the digital and physical universes.
                </p>
                <h3>Topics Covered:</h3>
                <ul>
                    <li>Introduction to Robotics.</li>
                    <li>Introduction to Embedded systems.</li>
                    <li>Introduction to programming in embedded..</li>
                    <li>Introduction to ADC..</li>
                    <li>Introduction To Wifi.</li>
                    <li>Introduction to ESP 8266 module.</li>
                    <li>Introduction to GPRS and TCP/IP.</li>
                </ul>
                <h3>Eligibility:</h3>
                <p>
                    Anybody and everybody is welcome.Any Engineering student of
                    any year and any branch is eligible for this workshop.
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
                <p>
                    Basic of Electronics,Basic knowledge Programming Language
                    (like C).
                </p>
                <h3>Fee:</h3>
                <ul>
                    <li>IEEE Member(CS): ₹ 30</li>
                    <li>IEEE Member(Non CS): ₹ 40</li>
                    <li>Non IEEE Member: ₹ 60</li>
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
                            TCP
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Embedded
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Tech
                        </a>
                        <a href="#" className="tag-cloud-link">
                            C
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
