import React from "react";
import "../assets/styles/Portfolio.css";
import Projects from "../components/Projects";
import { projects } from "../assets/myData";  

function Portfolio() {
  return (
    <div className="portfolio section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
