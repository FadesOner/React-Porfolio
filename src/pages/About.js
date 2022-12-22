import React from "react";
import { info } from "../assets/myData";
import "../assets/styles/About.css";

function About() {
  return (
    <div className="about section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="typewriterabout">Hi there!, I am</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-intro">
              <h3>Luis Debourg</h3>
              <p>
                Full Stack Developer specializing in front end development with
                1 year experience developing mid to large scale websites using
                the latest core web technologies. Medium knowledge in HTML,
                Advance CSS, JavaScript, JQuery, GitHub, React, Bootstrap, APIs.
                Back end development: Node.js, Express.js, SQL Server(MySQL,
                MongoDB, SQLite), Object-Oriented Programming, Object Relation
                Mapping, Model-View-Controller.
              </p>


              <p>
                Additional Skills: Photoshop, Illustrator,Indesign, Adobe XD,
                ExpressionEngine and WordPress. An enthusiastic and
                self-motivated front end developer, who's focusing on building
                user-friendly, multi-device websites. Accuracy and attention to
                detail are some of the additional points I owned.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image fade-in">
              <img src={info.avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
