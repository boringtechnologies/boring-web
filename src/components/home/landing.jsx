'use client'

import React, {useEffect} from "react";
import "../../styles/home.styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  return (
    <div className="section landing">
      <div className="container">
        <h1>
          <span data-aos="fade-down">WELCOME</span>
          <span data-aos="fade-down" data-aos-delay="500">---</span>
          <span data-aos="fade-down" data-aos-delay="1000">TO THE</span>{" "}
        </h1>
        <div className="text">
          <h2 data-aos="zoom-out">Land of code and pixels</h2>
          <p data-aos="zoom-out" data-aos-delay="1000">- where your wildest software dreams come true!</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
