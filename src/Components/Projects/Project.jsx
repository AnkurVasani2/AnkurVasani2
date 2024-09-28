import React, { useState, useEffect } from 'react';
import '../Projects/Project.css';
import chartter_logo from '../../assets/chartter_logo.png';
import fridgemate_logo from '../../assets/fridgemate.png';
import ankur from '../../assets/logo_full.png';
import ezfix from '../../assets/EZfix.png';
import streamlit from '../../assets/streamlit.png';

const specificRepos = [
  { name: 'chartter', logo: chartter_logo },
  { name: 'FridgeMate', logo: fridgemate_logo },
  { name: 'Text_To_SQL', logo: streamlit},
  { name: 'AnkurVasani2', logo: ankur },
  { name: 'EZfix', logo: ezfix },
];

const fetchGitHubProjects = async () => {
  const response = await fetch('https://api.github.com/users/ankurvasani2/repos');
  const data = await response.json();
  return data.filter(repo => specificRepos.some(specificRepo => specificRepo.name === repo.name));
};

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchGitHubProjects();
      setProjects(projects);
    };

    getProjects();
  }, []);

  const getLogoForRepo = (repoName) => {
    const repo = specificRepos.find(specificRepo => specificRepo.name === repoName);
    return repo ? repo.logo : 'path/to/default_logo.png';
  };

  return (
    <div className="project">
      <div className="head">
        <span>Discover my recent</span>
        <h1>Projects</h1>
      </div>
      <span className="span-tooltip">*Click on the card to flip</span>
      <div className="projects">
        {projects.map((project) => (
          <div className="flip-container" key={project.id}>
            <div className="flipper">
              <div className="front">
                <img src={getLogoForRepo(project.name)} alt={project.name} className='logo' />
                <h2>{project.name}</h2>
              </div>
              <div className="back">
                <p className='project-text'>{project.description}</p>
                <div className="project-btns">
                  <button onClick={() => window.open(project.html_url, '_blank')}>Github</button>
                  {project.homepage && <button onClick={() => window.open(project.homepage, '_blank')}>Visit Project</button>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
