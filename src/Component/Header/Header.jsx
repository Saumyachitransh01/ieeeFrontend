import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/logoiee2.png";

export default function Header() {
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">
                    <img src={logo} alt="IEEE" width="200" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link">
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://ieeeditu.org.in">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                        {/* <li>
                            <a className="nav-link"> Dark Mode</a>
                        </li>
                        <label className="switch">
                            <input
                                type="checkbox"
                                id="Check"
                                onChange={DarkMode(this)}
                                on
                            />

                            <span className=" slider round"></span>
                        </label> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
