import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

import image from "../images/eco-rewards-logo.png";

function Main(props) {
    return (
        <div className="container border-bottom">
            <div className="row">
                <div className="col-6">
                    <h1 className="display-4">Green Actions & Rich Rewards</h1>
                    <p className="lead">Go Green, Earn Rewards: Embrace Eco-Friendly Living and Harvest the Benefits!</p>
                    <div className="main-btn">
                        <button type="button" className="app-btn btn btn-lg btn-success">
                            <FontAwesomeIcon icon={faApple} className="pe-2" />
                            <span>App Store</span>
                        </button>
                        <button type="button" className="google-btn btn btn-lg btn-success">
                            <FontAwesomeIcon icon={faGoogle} className="pe-2" />
                            <span>Google Play</span>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;
