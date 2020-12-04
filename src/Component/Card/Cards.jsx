import React from "react";
import Card from "./Card_main";
import bg1 from "../Images/bg_1.jpg";
import bg2 from "../Images/bg_2.jpg";

export default function Cards() {
    return (
        <div>
            {/* Event card */}
            <Card
                image={bg1}
                title="College"
                link="#link"
                text="IEEE Group photo "
            />
            <Card
                image={bg2}
                title="Hacking"
                link="#link"
                text="You will learn hacking here "
            />
        </div>
    );
}
