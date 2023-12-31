import React from 'react';
import data from '../../ResumeData/data.json';
import './Projects.css'; 
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <ul className="project-list">
        {data.projects.map((project, index) => (
          <li key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
