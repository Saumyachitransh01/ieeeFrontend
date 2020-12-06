import React from "react";
import Cyber from "../Images/cyber.jpg";
import "react-bootstrap/dist/react-bootstrap";

export default function Cyberdome() {
    return (
        <div>
            <div className="col-md-12">
                <center>
                    <div className="a">
                        <h2 className="mb-3">#2.Cyberdome</h2>
                    </div>

                    <div className="a">
                        <img
                            src={Cyber}
                            alt=""
                            className="img-fluid"
                            width="660"
                            height="345"
                        />
                    </div>
                </center>
                <br />
                <p>
                    Description:Cyber security is the practice of defending
                    computers, servers, mobile devices, electronic systems,
                    networks, and data from malicious attacks. It's also known
                    as information technology security or electronic information
                    security. The term applies in a variety of contexts, from
                    business to mobile computing.Implementing effective
                    cybersecurity measures is particularly challenging today
                    because there are more devices than people, and attackers
                    are becoming more innovative.
                </p>
                <p>
                    <h3>Topics Covered:</h3>
                    <ul>
                        <li>Fundamental of Ethical Hacking</li>
                        <li>Virtualization & System Cloning</li>
                        <li>Windows Hacking & Security (Win 8 & Win 7)</li>
                        <li>Online Cloud Computer Development</li>
                        <li>
                            Hacking by Viruses, Trojans, Keyloggers & Spywares
                        </li>
                        <li>Facebook Hacking & Security</li>
                        <li>Website & Database Hacking Attacks</li>
                        <li>Credit Card Frauds & Cases</li>
                        <li>Proxy Server & VPN Technologies</li>
                    </ul>
                    <h3>Eligibility:</h3>
                    <p>All student are eligibile</p>
                    <h3>Skills you will gain:</h3>
                    <ul>
                        <li>Networking Skills</li>
                        <li>Linux Skills</li>
                        <li>Wireshark</li>
                        <li>Scripting</li>
                        <li>Database</li>
                    </ul>
                    <h3>Prerequisite:</h3>
                    <p>Basic knowledge of Linux.</p>
                    <h3>Fee:</h3>
                    <ul>
                        <li>IEEE Member(CS): ₹ 100</li>
                        <li>IEEE Member(Non CS): ₹ 120</li>
                        <li>Non IEEE Member: ₹ 150</li>
                    </ul>
                    <h3>Duration:</h3>
                    <p>16 hours (8 hour per day)</p>
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
                            Linux
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Kali Linux
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Tech
                        </a>
                        <a href="#" className="tag-cloud-link">
                            Brubsuit
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
