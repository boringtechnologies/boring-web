import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/services.styles.scss";

function Softwarepage() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  return (
    <div className="web">
      <div className="first">
        <div className="title">
          <h1>SOFTWARE PROJECT</h1>
          <div className="side web-only">
            <p data-aos="fade-down">backend development</p>
            <p data-aos="fade-down" data-aos-delay="500">
              desktop application
            </p>
          </div>
        </div>
        <p className="intro">
          <p data-aos="fade-down" data-aos-delay="1000">
            Boring Technologies is a software development company that offers a
            wide range of software engineering services. Our team of experienced
            engineers can help you.
          </p>
        </p>
      </div>
      <div className="section list">
        <h2>Our services include:</h2>
        <ul>
          <li>
            <div className="text">
              <p className="big" data-aos="fade-right">
                Audio and Video Processing:
              </p>
              <p data-aos="fade-right" data-aos-delay="500">
                We have a deep understanding of the technologies and techniques
                used for audio and video processing. We can help you with
                everything from basic video editing to complex audio and video
                processing applications.
              </p>
            </div>
            <div className="pic"></div>
          </li>
          <li>
            <div className="pic" id="left"></div>
            <div className="text" id="left">
              <p className="big" data-aos="fade-left">
                Backend Development:
              </p>
              <p data-aos="fade-left" data-aos-delay="500">
                Our team of engineers is skilled in a variety of programming
                languages, including Python, Node JS, C++, CUDA, and Javascript.
                We can help you with everything from building a simple API to
                developing a complex backend system.
              </p>
            </div>
          </li>
          <li>
            <div className="text">
              <p className="big" data-aos="fade-right">
                Cloud Services:
              </p>
              <p data-aos="fade-right" data-aos-delay="500">
                We have experience working with cloud services like AWS, GCP and
                can help you with deployment and management.
              </p>
            </div>
            <div className="pic"></div>
          </li>
          <li>
            <div className="pic" id="left"></div>
            <div className="text" id="left">
              <p className="big" data-aos="fade-left">
                Open Source Frameworks:
              </p>
              <p data-aos="fade-left" data-aos-delay="500">
                We have experience working with popular open source frameworks
                like Odoo, Wordpress and can help you with implementation and
                customization.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="section conclusion">
        <div className="container">
          <div className="side">
            <p id="text">
              At <span className="medium">Boring Technologies</span>, our goal
              is to help you build efficient and reliable software that meets
              your needs. We pride ourselves on delivering high-quality software
              on time and on budget.{" "}
              <Link to="/contact" id="name">
                Contact us
              </Link>{" "}
              today to discuss your project and see how we can help you take
              your business to the next level.
            </p>
            <div className="button">
              <p className="web-only">here</p>
              <Link to="/contact" id="name">
                <button>Tell Us More</button>
              </Link>
              <p className="web-only">here</p>
            </div>
          </div>
          <div className="pic right"></div>
        </div>
      </div>
    </div>
  );
}

export default Softwarepage;
