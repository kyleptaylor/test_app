import React from "react";
import { Link } from "react-router-dom";
import "../shared/shared.css";

function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/latest" className="nav-link">
        LATEST
      </Link>
      <Link to="/world" className="nav-link">
        WORLD
      </Link>
      <Link to="/sports" className="nav-link">
        SPORTS
      </Link>
      <Link to="/culture" className="nav-link">
        CULTURE
      </Link>
      <Link to="/economy" className="nav-link">
        ECONOMY
      </Link>
    </nav>
  );
}

export default Navigation;
