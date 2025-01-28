import React, { useState } from "react";
import "./../styles/FooterSection.css";

function FooterSection() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">
            Grand 39 Cook <br /> With Iran
          </h2>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">→</button>
          </form>
          <p className="newsletter-text">
            Subscribe to our newsletter to stay in the loop with our latest
            news, promotions, and events.
          </p>
        </div>

        <div className="footer-middle">
          <ul className="footer-links">
            <li>
              <a href="/concept">Concept</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/join-us">Join Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p className="contact-info">📞 +94 123456789</p>
          <p className="contact-info">
            📍 39 Passara Rd, Ella 90090, Sri Lanka
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="bottom-links">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-conditions">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">@Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterSection;
