import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFileDownload,
  FaBehanceSquare,
} from "react-icons/fa";
import { info } from "../assets/myData";
import "../assets/styles/Resume.css";  

function Resume() {
  let iconStyles = { fontSize: "25px" };
  return (
    <div className="resume section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="resume-intro">
              <h3>Skills</h3>
              <h4>Front-end Proficiencies</h4>
              <p>HTML, CSS, JavaScript, jQuery,Git, React,Boostrap, Redux</p>
              <h4>Back-end Proficiencies</h4>
              <p>
                APIs,NodeJS, ExpressJS, MySQL,Sequelize, MongoDB, Mongoose,
                REST, MERN Stack
              </p>
              <h4>Additional Skills:</h4>
              <p>Photoshop, Illustrator,Indesign, Adobe XD,Figma</p>
              <h4>Tools:</h4>
              <p>
                Github, Heroku, Imsomnia, MongoDb Compass, GraphQL, DevTools
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="resume-image">
              <ul className="resume-list">
                <li className="resume-links">
                  <a href={info.resume} target="_blank" rel="noreferrer">
                    <i>
                      <FaFileDownload style={iconStyles} />
                    </i>
                    Download Resume
                  </a>
                </li>
                <li className="resume-links">
                  <a href={info.linkedinURL} target="_blank">
                    <i>
                      <FaLinkedin style={iconStyles} />
                    </i>
                    {info.linkedin}
                  </a>
                </li>
                <li className="resume-links">
                  <a href={info.githubURL} target="_blank">
                    <i>
                      <FaGithubSquare style={iconStyles} />
                    </i>
                    {info.githubUser}
                  </a>
                </li>
                <li className="resume-links" >
                  <a href={info.behance} target="_blank">
                    <i>
                      <FaBehanceSquare style={iconStyles} />
                    </i>
                    {info.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
