import React from "react";
import "./Analytics.css";
import mainImg from "../images/main.png";
import leaderboardImg from "../images/leaderboard.png";
import AnalyticsImg from "../images/analytics.png";

function Analytics(props) {
    return (
        <div className="container border-bottom pt-4">
            <h1 className="display-4 pt-5">Game On for a Greener World</h1>
            <h1 className="lead">Track, Play, Connect!</h1>
            {/* <p className="lead">Plots that show how you and your friends are doing with the metrics for the last month</p> */}
            <div id="carouselExampleControls" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="display-6">Calculate and track your carbon footprint</h3>
                            </div>
                            <div className="col-6">
                                <img src={mainImg} className="d-block w-100" alt="Main Page" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="display-6">Stay motivated with competitive leaderboard</h3>
                            </div>
                            <div className="col-6">
                                <img src={leaderboardImg} className="d-block w-100" alt="Leaderboard" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="display-6">Redeem rewards in eco-conscious shops</h3>
                            </div>
                            <div className="col-6">
                                <img src={AnalyticsImg} className="d-block w-100" alt="Analytics" />
                            </div>
                        </div>
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
