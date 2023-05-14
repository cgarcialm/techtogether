import React from "react";
import "./Analytics.css";
import mainImg from "../images/main.png";
import leaderboardImg from "../images/leaderboard.png";
import AnalyticsImg from "../images/analytics.png";

function Analytics(props) {
    return (
        <div className="container">
            <h1 className="display-4">Carbon Footprint Analytics</h1>
            <p className="lead">Plots that show how you and your friends are doing with the metrics for the last month</p>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mainImg} className="d-block w-100" alt="Main Page" />
                    </div>
                    <div className="carousel-item">
                        <img src={leaderboardImg} className="d-block w-100" alt="Leaderboard" />
                    </div>
                    <div className="carousel-item">
                        <img src={AnalyticsImg} className="d-block w-100" alt="Analytics" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Analytics;
