import React from "react";
import Linux from "../Images/linux.jpg";
import "react-bootstrap/dist/react-bootstrap";

export default function Linux_Bootcamp() {
    return (
        <div>
            <div className="col-md-12">
                <center>
                    <div className="a">
                        <h2 className="mb-3">#4.Linux Bootcamp</h2>
                    </div>

                    <div className="a">
                        <img
                            src={Linux}
                            alt=""
                            className="img-fluid"
                            width="660"
                            height="345"
                        />
                    </div>
                </center>
                <br />
                <p>
                    Description:Linux is a family of open source Unix-like
                    operating systems based on the Linux kernel, an operating
                    system kernel first released on September 17, 1991, by Linus
                    Torvalds. Linux is typically packaged in a Linux
                    distribution.Linux is versatile so you can use Linux on
                    virtually anything you develop.Linux is a community where
                    you can work with other Linux developers to share knowledge
                    and learnings.
                </p>

                <h3>Topics Covered:</h3>
                <ul>
                    <li>Introduction to Linux and Open source software.</li>
                    <li>Top issues to consider when migrating to Linux.</li>
                    <li>Getting around a Linux system.</li>
                    <li>Introduction to X graphical system.</li>
                    <li>Linux command line and editing.</li>
                    <li>Shell scripting.</li>
                    <li>
                        Overview of bash scripting language & Linux file
                        management
                    </li>
                </ul>
                <p>
                    The hands on session will help the participants to realize
                    the practical aspects of Linux Operaring System.
                </p>
                <h3>Eligibility:</h3>
                <p>Anybody and everybody is welcome.</p>
                <h3>Prerequisite:</h3>
                <p>Basic knowledge about using Web & Internet</p>
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
                <h3>Certificate Policy:</h3>
                <ul>
                    <li>
                        Certificate of Merit for all the workshop participants.
                    </li>
                    <li>
                        At the end of this workshop, a small competition will be
                        organized among the participating students and winners
                        will be awarded with a 'Certificate of Excellence'.
                    </li>
                    <li>
                        No Certificate Will Be Provided To Those How Leave The
                        Workshop In Between.
                    </li>
                </ul>
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
            </div>
        </div>
        // </div>
    );
}
