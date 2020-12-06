import "./App.css";
import React from "react";
import Header from "./Component/Header/Header.jsx";
import Carousel from "./Component/Carousel/Carousel";
import Card from "./Component/Card/Cards";
import Footer from "./Component/Footer/Footer.jsx";
import Cloud from "./Component/Pages/Cloud_Workshop";
import Cyber from "./Component/Pages/Cyberdome";
import CardTest from "./Component/Card/Card_TestFile";
import IOT from "./Component/Pages/IOT";
import Linux from "./Component/Pages/Linux_Bootcamp";
import WebDev from "./Component/Pages/Web.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App" id="App1">
            <Router>
                <Switch>
                    <Route path="/Cloud">
                        <Header />
                        <Cloud />
                        <Footer />
                    </Route>
                    <Route path="/Cyberdome">
                        <Header />
                        <Cyber />
                        <Footer />
                    </Route>
                    <Route path="/IOT">
                        <Header />
                        <IOT />
                        <Footer />
                    </Route>
                    <Route path="/linux">
                        <Header />
                        <Linux />
                        <Footer />
                    </Route>
                    <Route path="/web">
                        <Header />
                        <WebDev />
                        <Footer />
                    </Route>

                    <Route path="/">
                        <div className="BG"></div>
                        {/* Header of Website */}
                        <Header />

                        {/* Images on top of HomePage */}
                        <Carousel />

                        <h3
                            style={{
                                textAlign: "center",
                                color: "grey",
                                marginBottom: "20px",
                            }}>
                            Upcoming Event
                        </h3>

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
