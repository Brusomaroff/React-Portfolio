import React from 'react';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project">
        <img src="project1.jpg" alt="Project 1" />
        <div className="project-details">
          <h3>Project 1 Title</h3>
          <p>Description of Project 1</p>
          <div>
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      {/* Add more project items here */}
    </section>
  );
}

export default Portfolio;
