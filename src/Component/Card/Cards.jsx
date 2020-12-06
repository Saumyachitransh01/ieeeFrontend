import React from "react";
import Card from "./Card_main";
import "./Card_main.css";
// Images
import Cloud from "../Images/cloud.jpg";
import Cyberdome from "../Images/cyber.jpg";
import IOT from "../Images/iot.jpg";
import Linux from "../Images/linux.jpg";
import Web from "../Images/web.jpg";

export default function Cards() {
    return (
        <div className="Cards">
            {/* Event card */}
            <div className="Cards_card">
                <Card
                    image={Cloud}
                    title="Microsoft Cloud Workshop"
                    link="Cloud"
                    time="6 hours"
                    text="Microsoft Cloud Workshop (MCW) is a hands-on community development experience."
                />
                <Card
                    image={Cyberdome}
                    title="Cyberdome"
                    link="Cyberdome"
                    time="2 hours"
                    text="Cyberdome is workshop which focus on basic of Sercuity with hands on experiments."
                />
                <Card
                    image={IOT}
                    title="Seminar on IOT"
                    link="IOT"
                    time="5 hours"
                    text="Internet of things (IoT) is a system of interrelated computing devices, mechanical and the ability to transfer data over a network without requiring human or computer interaction."
                />
                <Card
                    image={Linux}
                    title="Linux Bootcamp"
                    link="linux"
                    time="1 hours"
                    text="Linux System Administrator bootcamp provides a thorough introduction to UNIX and Linux fundamentals as well as essential administration."
                />
                <Card
                    image={Web}
                    title="Seminar on Web Development"
                    link="web"
                    time="5 hours"
                    text="Web development refers to building, creating, and an maintaining websites. It includes aspects such as web design, web publishing, web programming."
                />
                <Card
                    image={IOT}
                    title="Seminar on IOT"
                    link="IOT"
                    time="5 hours"
                    text="Internet of things (IoT) is a system of interrelated computing devices, mechanical and the ability to transfer data over a network without requiring human or computer interaction."
                />
                <Card
                    image={Cyberdome}
                    title="Cyberdome"
                    link="Cyberdome"
                    time="2 hours"
                    text="Cyberdome is workshop which focus on basic of Sercuity with hands on experiments."
                />
            </div>
        </div>
    );
}
