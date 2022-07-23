import React from 'react';
import { FaLinkedinIn, FaPhoneAlt, FaGithub, FaEnvelope, FaBehanceSquare} from "react-icons/fa";
import {info} from '../assets/myData';
import "../assets/styles/Footer.css";

function Footer() {
  let mailLink = 'mailto:' + info.email;
  let phoneLink = 'tel:' + info.phone;
  return (

  <footer>
    <div className="container">
      
      <ul>
        <li><a href={info.linkendinURL}><i><FaLinkedinIn /></i></a></li>
        <li><a href={phoneLink}><i><FaPhoneAlt /></i></a></li>
        <li><a href={mailLink}><i><FaEnvelope /></i></a></li>
        <li><a href={info.github}><i><FaGithub /></i></a></li>
        <li><a href={info.behance}><i><FaBehanceSquare /></i></a></li>
      </ul>
    </div>
  </footer>

  );
}

export default Footer;