import React from "react";
import "./Analytics.css";

function Analytics(props) {
    return (
        <div className="container">
            <h1 className="display-4">Carbon Footprint Analytics</h1>
            <p className="lead">Plots that show how you and your friends are doing with the metrics for the last month</p>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/random/100x80?sig=1" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/100x80?sig=2" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/100x80?sig=3" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Analytics;
