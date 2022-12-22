import React from "react";
import "../assets/styles/Navbar.css"; 

function Nav({ currentPage, handlePageChange }) {
  const navLinks = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          {navLinks.map((navLink) => (
            <li className="nav-item" key={navLink}>
              <a
                href={"#" + navLink.toLowerCase()}
                onClick={() => handlePageChange(navLink)}
                className={
                  currentPage === navLink ? "nav-link active" : "nav-link"
                }
              >
                {navLink}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Nav;
