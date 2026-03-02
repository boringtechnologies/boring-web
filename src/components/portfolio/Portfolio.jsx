'use client'

import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import '../../styles/portfolio.scss'

const projects = [
  {
    id: 1,
    title: 'Boring Technologies Website',
    description:
      'The official website for Boring Technologies, built with Next.js and SCSS. Features a responsive design with smooth animations, a multi-page layout covering services, team, and contact information.',
    images: [
      '/portfolio/boring-web-1.svg',
      '/portfolio/boring-web-2.svg',
      '/portfolio/boring-web-3.svg',
    ],
    url: 'https://boringtechnologies.dev',
    github: 'https://github.com/boringtechnologies/boring-web',
    tags: ['Next.js', 'React', 'SCSS'],
  },
  {
    id: 2,
    title: 'Project Alpha',
    description:
      'A full-stack web application featuring a powerful analytics dashboard. Built with React on the frontend and a Node.js backend with a RESTful API, providing real-time data visualization.',
    images: [
      '/portfolio/project-alpha-1.svg',
      '/portfolio/project-alpha-2.svg',
    ],
    url: null,
    github: null,
    tags: ['React', 'Node.js', 'REST API'],
  },
  {
    id: 3,
    title: 'Project Beta',
    description:
      'A cross-platform software solution offering an intuitive interface for managing complex workflows. Developed with performance and scalability in mind.',
    images: [
      '/portfolio/project-beta-1.svg',
      '/portfolio/project-beta-2.svg',
    ],
    url: null,
    github: null,
    tags: ['Software', 'Cross-platform'],
  },
  {
    id: 4,
    title: 'Project Gamma',
    description:
      'A cloud-based open-source platform enabling teams to collaborate seamlessly. Features real-time updates, role-based access control, and comprehensive audit logging.',
    images: ['/portfolio/project-gamma-1.svg'],
    url: null,
    github: null,
    tags: ['Cloud', 'Open Source'],
  },
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="section portfolio">
      <div className="portfolio-header">
        <h1>PORTFOLIO</h1>
        <p>A selection of projects built by the Boring Technologies team.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project)
            }}
          >
            <div
              className="portfolio-item-img"
              style={{ backgroundImage: `url(${project.images[0]})` }}
            ></div>
            <div className="portfolio-item-info">
              <h2>{project.title}</h2>
              <div className="portfolio-item-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Portfolio
