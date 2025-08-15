import React from "react";
import { Link } from "react-router-dom";
import "../shared/shared.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>
      <div className="header-center">
        <Link to="/" className="logo">
          Logo
        </Link>
      </div>
      <div className="header-right">
        <Link to="/signin" className="sign-in-link">
          Sign in
        </Link>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </header>
  );
}

export default Header;
