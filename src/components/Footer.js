import React from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaGithub,
  FaEnvelope,
  FaBehanceSquare,
} from "react-icons/fa";
import { info } from "../assets/myData";
import "../assets/styles/Footer.css";

function Footer() {
  let mailLink = "mailto:" + info.email;
  let phoneLink = "tel:" + info.phone;
  let iconStyles = { fontSize: "18px" };
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <a href={info.linkedinURL} target="_blank">
              <i>
                <FaLinkedinIn style={iconStyles} />
              </i>
            </a>
          </li>
          <li>
            <a href={phoneLink}>
              <i>
                <FaPhoneAlt style={iconStyles} />
              </i>
            </a>
          </li>
          <li>
            <a href={mailLink} target="_blank">
              <i>
                <FaEnvelope style={iconStyles} />
              </i>
            </a>
          </li>
          <li>
            <a href={info.githubURL} target="_blank">
              <i>
                <FaGithub style={iconStyles} />
              </i>
            </a>
          </li>
          <li>
            <a href={info.behance} target="_blank">
              <i>
                <FaBehanceSquare style={iconStyles} />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
