import React from "react";
import Nav from "./Navbar.js";
import "../assets/styles/Header.css";


function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header" >
      <h1>
        <a className="no-link">
          Luis Debourg
        </a>
      </h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
