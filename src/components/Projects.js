import React from 'react';
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-gallery">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Details of Project 1...</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Details of Project 2...</p>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <p>Details of Project 3...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
