import React from 'react';
import weatherAppImage from '../images/weatherapp.png';
import hobbyBoxImage from '../images/hobbybox.jpeg';
import FiTrackerImage from '../images/fit.png'
import NoteTakerImage from '../images/note.png'
import PassgenImage from '../images/passgen.png'
import TextEditorImage from '../images/pwa.png'
import "../styles/Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather API application',
      image: weatherAppImage,
      deployLink: 'https://brusomaroff.github.io/weatherForecast/',
      githubLink: 'https://github.com/Brusomaroff/weatherForecast',
    },
    {
      title: 'Hobbybox',
      image: hobbyBoxImage,
      deployLink: 'https://hobbybox.herokuapp.com/',
      githubLink: 'https://github.com/Qaizen/hobby-box',
    },
    {
      title: 'FiTracker',
      image: FiTrackerImage,
      deployLink: 'https://norboro1.github.io/FitnessAssistant/',
      githubLink: 'https://github.com/Norboro1/FitnessAssistant',
    },
    {
      title: 'Note Taker',
      image: NoteTakerImage,
      deployLink: 'https://brysonsnotetaker.herokuapp.com/',
      githubLink: 'https://github.com/Brusomaroff/Note-Taker',
    },
    {
      title: 'Password Generator',
      image: PassgenImage,
      deployLink: 'https://brusomaroff.github.io/javaScriptPasswordGenerator/',
      githubLink: 'https://github.com/Brusomaroff/javaScriptPasswordGenerator',
    },
    {
      title: 'PWA Text Editor',
      image: TextEditorImage,
      deployLink: 'https://pwa-text-editor-bryson.herokuapp.com/',
      githubLink: 'https://github.com/Brusomaroff/PWA-Text-Editor',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
