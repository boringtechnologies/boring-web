'use client'

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import boringpsy2 from "../../assets/boringpsy-aboutus.png";
import boringpsy3 from "../../assets/boringpsy-conditions.png";
import boringpsy6 from "../../assets/boringpsy-contact.png";
import boringpsy5 from "../../assets/boringpsy-home.png";
import boringpsy1 from "../../assets/boringpsy-landing.png";
import boringpsy4 from "../../assets/boringpsy-services.png";
import falcon1 from "../../assets/falconmdpa-landing.png";
import falcon3 from "../../assets/falconmdpa-login.png";
import falcon2 from "../../assets/falconmdpa-prop-list.png";
import farawatt2 from "../../assets/farawatt-description.png";
import farawatt1 from "../../assets/farawatt-landing.png";
import farawatt3 from "../../assets/farawatt-login.png";
import farawatt4 from "../../assets/farawatt-map.png";
import jouvence4 from "../../assets/jouvence-contact.png";
import jouvence1 from "../../assets/jouvence-landing.png";
import jouvence2 from "../../assets/jouvence-medspa-description.png";
import jouvence3 from "../../assets/jouvence-medspa-landing.png";
import tsp2 from "../../assets/tsp-about.png";
import tsp1 from "../../assets/tsp-landing.png";
import tsp4 from "../../assets/tsp-login.png";
import tsp3 from "../../assets/tsp-why.png";
import web1 from "../../assets/web-about.png";
import web4 from "../../assets/web-contact.png";
import web3 from "../../assets/web-faq.png";
import web2 from "../../assets/web-what.png";
import "../../styles/portfolio.scss";
import ProjectDetails from "./ProjectDetails";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2400 });
  }, []);

  const projects = [
    {
      images: [
        boringpsy1,
        boringpsy2,
        boringpsy3,
        boringpsy4,
        boringpsy5,
        boringpsy6,
      ],
      title: "Boring Psychiatric Services LLC",
      description: ["Custom illustrations", "Location map"],
      techs: ["React JS"],
    },
    {
      images: [tsp1, tsp2, tsp3, tsp4],
      title: "TheSkillPlace",
      description: [
        "Custom illustrations",
        "Robust backend",
        "Custom database",
        "A secure user login system",
      ],
      link: "https://theskillplace.com/",
      techs: ["React JS", "Node JS", "MongoDB"],
    },
    {
      images: [web2, web1, web3, web4],
      title: "Tech Company",
      description: ["Custom illustrations"],
      techs: ["React JS"],
    },
    {
      images: [jouvence1, jouvence2, jouvence3, jouvence4],
      title: "MedSpa",
      description: ["Interactive animations"],
      techs: ["React JS"],
    },
    {
      images: [farawatt1, farawatt2, farawatt3, farawatt4],
      title: "Tech Company",
      description: [
        "Interactive animations",
        "A secure user login system",
        "Interactive map",
      ],
      techs: ["React JS"],
    },
    {
      images: [falcon1, falcon2, falcon3],
      title: "Falcon MDPA",
      description: [
        "Logo Creation",
        "Robust backend",
        "Custom database",
        "Private admin section for easy updates",
      ],
      link: "https://falconmdpa.com/",
      techs: ["React JS", "Node JS", "Mongo DB", "AWS"],
    },
  ];

  const [open, setOpen] = useState(false);
  const [projectDetails, setProjectDetail] = useState();

  return (
    <div className="portfolio">
      <div className="first">
        <h1>PORTFOLIO</h1>
        <div className="intro">
          <p data-aos="fade-down">
            At Boring Tech, we specialize in comprehensive website development,
            encompassing the full spectrum from conception, development, and
            custom illustration content to deployment. This portfolio page
            serves as a testament to our reliability and showcases our skills in
            action.
          </p>
        </div>
      </div>
      <div className="projects">
        <ul>
          {projects.map((project, projectKey) => (
            <li
              className={`project ${!open ? "can-hover" : "cannot-hover"}`}
              key={projectKey}
            >
              <img src={project.images[0].src} alt="" />
              <div className="onhover">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                    setProjectDetail({ ...project });
                  }}
                >
                  <span className="small-text">Click here for more</span>Details
                </button>
              </div>
              <span className="gradient"></span>
            </li>
          ))}
        </ul>
      </div>
      {open && <ProjectDetails project={projectDetails} setOpen={setOpen} />}
    </div>
  );
}

export default Portfolio;
