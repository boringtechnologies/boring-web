import React, { useEffect } from "react";
import "../../styles/services.styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Webpage() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  return (
    <div className="web">
      <div className="first">
        <div className="title">
          <h1>WEB PROJECT</h1>
          <div className="side">
            <p data-aos="fade-down">web development</p>
            <p data-aos="fade-down"  data-aos-delay="500">web design</p>
          </div>
        </div>
        <p className="intro">
          <p data-aos="fade-down"  data-aos-delay="1000">
           At Boring Technologies, we know that a website is more than just a
          collection of pages on the internet. It's a reflection of your
          business and a tool to connect with your customers. That's why we
          offer a full range of web development services to bring your vision to
          life. 
          </p>
          
        </p>
      </div>
      <div className="section list">
        <h2>Our services include:</h2>
        <ul>
          <li>
            <div className="text">
              <p className="big" data-aos="fade-right">Web Design:</p>
              <p data-aos="fade-right" data-aos-delay="500">
                We'll work with you to create a visually stunning design that
                reflects your brand and attracts customers. We also provide
                wireframe design services to help you plan the layout of your
                website.
                <span className="medium">Illustration:</span> Want to add a
                touch of personality to your website? We can create custom
                illustrations that will make your site stand out.
              </p>
            </div>
            <div className="pic"></div>
          </li>
          <li>
            <div className="pic" id="left"></div>
            <div className="text" id="left">
              <p className="big" data-aos="fade-left">Frontend Development:</p>
              <p data-aos="fade-left" data-aos-delay="500">
                We'll build a responsive and user-friendly frontend that will
                make it easy for your customers to navigate your site.
                <span className="medium">
                  Responsive Website or Web Application:
                </span>{" "}
                Whether you need a website or a web application, we'll make sure
                it looks great and works seamlessly on all devices.
              </p>
            </div>
          </li>
          <li>
            <div className="text">
              <p className="big" data-aos="fade-right">Backend Development:</p>
              <p data-aos="fade-right" data-aos-delay="500">
                Our team of experienced developers will create a powerful and
                efficient backend system that will make your website run
                smoothly.
                <span className="medium">
                  Database Creation and Management:
                </span>{" "}
                We'll create and manage a database that will keep your website
                running smoothly and securely.
              </p>
            </div>

            <div className="pic"></div>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>
          At Boring Technologies, we pride ourselves on creating high-quality
          websites that will help you achieve your business goals. Contact us
          today to start building your dream website!
        </p>
      </div>
    </div>
  );
}

export default Webpage;
