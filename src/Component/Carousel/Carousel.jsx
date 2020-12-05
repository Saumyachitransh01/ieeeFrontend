import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../Images/bg_1.jpg";
import bg2 from "../Images/bg_2.jpg";
import bg3 from "../Images/bg_3.jpg";
import "./carousel.css";

export default function Home_Carousel() {
    return (
        <div>
            <Carousel className="carousel" useKeyboardArrows="true">
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg1}
                        style={{ width: "auto" }}
                        alt="First slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg2}
                        style={{ width: "auto" }}
                        alt="Second slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg3}
                        style={{ width: "auto" }}
                        alt="Third slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg2}
                        style={{ width: "auto" }}
                        alt="First slide"></img>
                </div>
                <div className="carousel-item1">
                    <img
                        className="img-fluid"
                        src={bg3}
                        style={{ width: "auto" }}
                        alt="First slide"></img>
                </div>
            </Carousel>
        </div>
    );
}
