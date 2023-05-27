import React from 'react';
import resumePDF from '../assets/BrysonResume.pdf';
import '../styles/Resume.css';

const Resume = () => {
  const proficiencies = [
    {
      title: 'JavaScript',
      description: 'Proficient in JavaScript with experience in modern ES6+ syntax and frameworks like React and Node.js.',
    },
    {
      title: 'Node.js',
      description: 'Skilled in server-side development with Node.js, including RESTful APIs, Express.js, and database integration.',
    },
    {
      title: 'React',
      description: 'Experienced in building interactive user interfaces using React, including state management, component lifecycle, and hooks.',
    },
    {
      title: 'HTML',
      description: 'Proficient in HTML for creating structured web pages.',
    },
    {
      title: 'CSS',
      description: 'Skilled in CSS for styling web pages and creating responsive layouts.',
    },
    {
      title: 'APIs',
      description: 'Experienced in working with APIs to fetch and manipulate data from external sources.',
    },
  ];

  return (
    <section className="resume-section">
      <div className="resume-header">
        <h2>Resume</h2>
        <div className="resume-download">
          <a href={resumePDF} download>Download Resume</a>
        </div>
      </div>
      <div className="proficiencies">
        <div className="column">
          {proficiencies.slice(0, 3).map((proficiency, index) => (
            <div className="proficiency" key={index}>
              <h4>{proficiency.title}</h4>
              <p>{proficiency.description}</p>
            </div>
          ))}
        </div>
        <div className="column">
          {proficiencies.slice(3, 6).map((proficiency, index) => (
            <div className="proficiency" key={index}>
              <h4>{proficiency.title}</h4>
              <p>{proficiency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
