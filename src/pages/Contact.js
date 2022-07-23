import React from "react";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import { info } from "../assets/myData";
import Form from "../components/Form";
import "../assets/styles/Contact.css";

function Contact() {
  var mailLink = "mailto:" + info.email;
  var phoneLink = "tel:" + info.phone;
  let iconStyles = { fontSize: "25px" };
  let iconStylesContact = { fontSize: "20px" };

  return (
    <div className="contact section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-intro">
              <p>
                For further enquiries get in touch through this links below!
              </p>
              <ul className="contact-list">
                <li className="contact-links">
                  <a href={mailLink} target="_blank" rel="noreferrer">
                    <i>
                      <FaEnvelope style={iconStylesContact} />
                    </i>
                    {info.email}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={phoneLink} target="_blank" rel="noreferrer">
                    <i>
                      <FaPhoneAlt style={iconStylesContact} />
                    </i>
                    {info.phone}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={info.linkendinURL}>
                    <i>
                      <FaLinkedin style={iconStyles} />
                    </i>
                    {info.linkendin}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={info.githubURL}>
                    <i>
                      <FaGithubSquare style={iconStyles} />
                    </i>
                    {info.githubUser}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-image">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
