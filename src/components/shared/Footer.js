import React from "react";
import { Link } from "react-router-dom";
import "../shared/shared.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>
      <div className="social-icons">
        <div className="social-icon twitter">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="social-icon facebook">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="social-icon linkedin">
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/authors" className="footer-link">
          Authors
        </Link>
        <Link to="/archive" className="footer-link">
          Archive
        </Link>
        <Link to="/terms" className="footer-link">
          Terms and Conditions
        </Link>
        <Link to="/cookies" className="footer-link">
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
