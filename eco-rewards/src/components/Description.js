import React from "react";
import "./Description.css";

import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant3.png";

function Description(props) {
    return (
        <div className="container pt-4">
            <div class="desc-row">
                <h2> </h2>
            </div>
            <div class="desc-row">
                <h2 class="display-4 mx-xl-6">Help the planet, get free stuff 🌱</h2>
            </div>
            <div class="desc-row justify-content-center text-center mb-4">
                <h3 class="h2 mt-3">Ever wondered how your daily activities contribute to your carbon footprint? ♻️</h3>
                <p class="lead">
                    The average annual carbon dioxide emissions per American is a shocking&nbsp;
                    <a href="https://www.inspirecleanenergy.com/blog/clean-energy-101/average-american-carbon-footprint#:~:text=The%20study%20found%20that%20the,U.S.%2C%20which%20is%208.5%20tons.">20 metric tons of CO2 per year</a>.
                </p>
                <p class="lead">Monitor your daily actions and understand the magnitude of your contribution to climate change in order to make informed decisions and reduce your footprint.</p>
            </div>
            <div class="row">
                <div class="col-4">
                    <img class="col-img" src={plant1} alt="description" />
                    <h4>Earn points</h4>
                    <p class="text-justify">
                        Every time you choose a sustainable action such as biking, recycling, or conserving energy, you earn points that&nbsp;<b>showcase your commitment to a greener lifestyle</b>. EcoRewards turns your eco-friendly actions into a rewarding experience.
                    </p>
                </div>
                <div class="col-4">
                    <img class="col-img" src={plant2} alt="description" />
                    <h4>Compete</h4>
                    <p class="text-justify">
                        <b>Join the friendly competition</b> in your neighborhood and strive to be the sustainability champion with EcoRewards. By achieving the lowest carbon footprint among your neighbors, you earn bonus points that set you apart as an eco-warrior.
                    </p>
                </div>
                <div class="col-4">
                    <img class="col-img" src={plant3} alt="description" />
                    <h4>Help</h4>
                    <p class="text-justify">
                        EcoRewards partners with conscious businesses that share your passion for sustainability. As you redeem rewards, you&nbsp;<b>actively support businesses that prioritize the planet</b>, making each transaction a small step towards a more sustainable future.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Description;
