import "./App.css";
import React from "react";
import Header from "./Component/Header/Header.jsx";
import Carousel from "./Component/Carousel/Carousel";
import Card from "./Component/Card/Cards";
import Footer from "./Component/Footer/Footer.jsx";

function App() {
    return (
        <div className="App" id="App1">
            {/* Header of Website */}
            <Header />

            {/* Images on top of HomePage */}
            <Carousel />

            <h4 style={{ textAlign: "center" }}>Upcoming Event</h4>

            {/* Card */}
            <Card />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
