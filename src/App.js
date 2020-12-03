import "./App.css";
import React, { Component } from "react";
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import bg1 from "./Component/Images/bg_1.jpg";
import bg2 from "./Component/Images/bg_2.jpg";
import bg3 from "./Component/Images/bg_3.jpg";
import "./Component/Assets/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
    return (
        <div className="App" id="App1">
            <Header />
            <Carousel className="carousel">
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg1}
                        style={{ width: "auto" }}
                        alt="first slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg2}
                        style={{ width: "auto" }}
                        alt="first slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg3}
                        style={{ width: "auto" }}
                        alt="first slide"></img>
                </div>
            </Carousel>
            <Footer />
        </div>
    );
}

export default App;
