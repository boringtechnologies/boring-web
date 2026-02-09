'use client'

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "../../styles/contact.styles.scss";

function Contactpage() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  return (
    <div className="section contact">
      <div className="top">
        <p data-aos="zoom-out">
          Contact us <span className="medium">today</span> for all your software
          development needs!
        </p>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="center">
          <h1>CONTACT</h1>
          <p data-aos="zoom-out" data-aos-delay="500">✉ sam@boring.tech</p>
          <p data-aos="zoom-out" data-aos-delay="1000">📞 (443)-844-8537</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Contactpage;
