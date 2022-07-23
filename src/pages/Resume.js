import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";
import {info} from '../assets/myData';

function Resume() {
  let iconStyles = { fontSize: "20px" };
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
                <h4>Front-End:</h4>
                 <p>HTML5, CSS, Bootstrap, JavaScript, jQuery, React, Vue, Redux
                 </p>
                 <h4>Back-End:</h4>
                 <p>NodeJS, ExpressJS, MySQL, MongoDB, Mongoose, Apollo & Sequelize
                  </p>
                  <h4>Tools:</h4>
                  <p>GitHub, Heroku, Insomnia
                </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="resume-image">
             <ul className="resume-list">
              <li className="resume-links">
                  <a href={ info.resume } target="_blank" rel="noreferrer"><i><FaFileDownload style={iconStyles}/></i>Download Resume</a>
                </li> 
                <li className="resume-links">
                  <a href={ info.linkedinURL }><i><FaLinkedin style={iconStyles}/></i>{ info.linkedin }</a>
                </li>
                <li className="resume-links">
                  <a href={ info.github }><i><FaGithubSquare style={iconStyles}/></i>{ info.github }</a> 
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