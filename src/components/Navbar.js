import React, { useState } from "react";
import "./../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          Grand 39 Cook <span>WITH IRAN</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/reserve" className="reserve-btn">
            RESERVE
          </a>
          <a href="/contact" className="contact-btn">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
