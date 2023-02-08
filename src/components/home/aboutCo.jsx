import React, { useEffect } from "react";
import "../../styles/home.styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutCo() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  return (
    <div className="section company">
      <div className="pic"></div>
      <div className="part">
        <div className="text">
          <p className="big" data-aos="fade-right">
            BORING TECHNOLOGIES
          </p>
          <p>
            <span data-aos="fade-right" data-aos-delay="500">
              is a software development company that specializes in creating
              innovative and efficient solutions for businesses and individuals.
            </span>
            <span data-aos="fade-right" data-aos-delay="1000">
              Our team of experienced developers utilizes the latest
              technologies to deliver high-quality software that meets the
              specific needs of our clients.
            </span>{" "}
            <span data-aos="fade-right" data-aos-delay="1500">
              Whether you need a custom application, website, or automation
              tools, Boring Technologies has the expertise to bring your project
              to life.
            </span>{" "}
            <span data-aos="fade-right" data-aos-delay="2000">
              Let us help you streamline your processes and take your business
              to the next level.
            </span>
          </p>
        </div>
        <div className="secpic"></div>
      </div>
    </div>
  );
}

export default AboutCo;
