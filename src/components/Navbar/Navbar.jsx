import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h2 href="#">Varunreddy</h2>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="mainicon">
        <div className="menu">
          <i className="bi bi-list"></i>
        </div>
      </label>
      <nav>
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skillset</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
