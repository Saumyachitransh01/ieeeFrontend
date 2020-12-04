import "./App.css";
import React from "react";
import Header from "./Component/Header/Header.jsx";
import Carousel from "./Component/Carousel/Carousel";
import Card from "./Component/Card/Cards";
import Footer from "./Component/Footer/Footer.jsx";
import Cloud from "./Component/Pages/Cloud_Workshop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App" id="App1">
            <Router>
                <Switch>
                    <Route path="/Cloud">
                        <Header />
                        <Cloud />
                    </Route>
                    <Route path="/Cyberdome">
                        <Header />
                    </Route>
                    <Route path="/IOT">
                        <Header />
                    </Route>
                    <Route path="/linux">
                        <Header />
                    </Route>
                    <Route path="/web">
                        <Header />
                    </Route>

                    <Route path="">
                        {/* Header of Website */}
                        <Header />

                        {/* Images on top of HomePage */}
                        <Carousel />

                        <h4 style={{ textAlign: "center" }}>Upcoming Event</h4>

                        {/* Card */}
                        <Card />

                        {/* Footer */}
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
