'use client'

import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/projectDetails.scss'

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <h2>{project.title}</h2>
        <div className="modal-carousel">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {project.images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {(project.url || project.github) && (
          <div className="modal-links">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Visit Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
