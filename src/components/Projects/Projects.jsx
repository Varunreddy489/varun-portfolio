import React from 'react';
import data from '../../ResumeData/data.json';
import './Projects.css'; 
const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
    <div id="projects">
      <ul className="project-list">
        {data.projects.map((project, index) => (
       <div key={index} className='cards'>
       <li className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
      </div>
        ))}
      </ul>
    </div>
    </>

  );
};

export default Projects;
