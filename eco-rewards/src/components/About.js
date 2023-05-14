import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About(props) {
    return (
        <div class="container">
            <h1 class="text-center display-4">Our Team</h1>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img class="card-img-top" src="https://robohash.org/3?set=set4" alt="Card" />
                        <div class="card-body">
                            <h5 class="card-title">Cecilia</h5>
                            <p class="card-text">Full Stack Developer</p>
                            <a href="https://www.linkedin.com/in/cgarcialopez/" class="btn btn-primary">
                                <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img class="card-img-top" src="https://robohash.org/4?set=set4" alt="Card" />
                        <div class="card-body">
                            <h5 class="card-title">Alexis</h5>
                            <p class="card-text">
                                <p class="card-text">Full Stack Developer</p>
                            </p>
                            <a href="https://www.linkedin.com/in/yytong39/" class="btn btn-primary">
                                <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img class="card-img-top" src="https://robohash.org/5?set=set4" alt="Card" />
                        <div class="card-body">
                            <h5 class="card-title">Rachel</h5>
                            <p class="card-text">
                                <p class="card-text">Full Stack Developer</p>
                            </p>
                            <a href="https://www.linkedin.com/in/rachel-fingerhut" class="btn btn-primary">
                                <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img class="card-img-top" src="https://robohash.org/7?set=set4" alt="Card" />
                        <div class="card-body">
                            <h5 class="card-title">Meredith</h5>
                            <p class="card-text">
                                <p class="card-text">Full Stack Developer</p>
                            </p>
                            <a href="https://www.linkedin.com/in/yu-meredith-luo/" class="btn btn-primary">
                                <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
