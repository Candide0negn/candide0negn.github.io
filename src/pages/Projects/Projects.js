// src/page/projects/Projects.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('ai-research');

  const projects = {
    'ai-research': {
      title: 'AI Research',
      description:
        'An exploration into neuroevolution and bio-inspired AI algorithms, focusing on NEAT and novelty search.',
    },
    'automation-tool': {
      title: 'Automation Tool',
      description:
        'A software tool designed to automate daily tasks and increase productivity using scripts and AI.',
    },
    'web-crawler': {
      title: 'Web Crawler',
      description:
        'A crawler that indexes websites for specific data analysis, helping in data gathering and preprocessing.',
    },
  };

  return (
    <div className="vim-inspired">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects" className="active">Projects</Link></li>
            <li><Link to="/reflections">Reflections</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="projects-main">
        <div className="sidebar">
          <h3>Projects</h3>
          <ul>
            {Object.keys(projects).map((key) => (
              <li
                key={key}
                className={selectedProject === key ? 'active' : ''}
                onClick={() => setSelectedProject(key)}
              >
                {projects[key].title}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h2>{projects[selectedProject].title}</h2>
          <p>{projects[selectedProject].description}</p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
      </footer>
    </div>
  );
};

export default Projects;
