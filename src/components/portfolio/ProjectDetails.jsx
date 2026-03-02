'use client'

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../styles/projectDetails.scss";

const ProjectDetails = ({ project, setOpen }) => {
  return (
    <div className="project-maincontainer">
      <div className="clickable" onClick={() => setOpen(false)}></div>
      <div className="content">
        <Carousel>
          {project.images.map((src, index) => (
            <img src={src.src} alt="" key={index} />
          ))}
        </Carousel>
        <div className="text">
          <h2>{project.title ? project.title : ""}</h2>
          <ul className="description">
            {project.description.map((detail) => (
              <li key={detail}>
                <p>▣ {detail}</p>
              </li>
            ))}
          </ul>
          <ul className="technologies">
            {project.techs.map((tech) => (
              <li key={tech}>
                <p>{tech}</p>
              </li>
            ))}
          </ul>
          {project.link ? (
            <button className="link-btn">
              <span className="arrow"></span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
              <span className="arrow right"></span>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
