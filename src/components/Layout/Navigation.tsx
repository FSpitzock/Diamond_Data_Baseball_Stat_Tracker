import { Link } from "react-router-dom";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <h4>Pages</h4>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Stats" className="nav-link">Stats</Link>
        <Link to="/BaseballAI" className="nav-link">BaseballAI</Link>
      </div>
      <div className="nav-links">
        <h4>Support</h4>
        <Link to="/Help" className="nav-link">Help</Link>
        <Link to="/FAQ" className="nav-link">FAQ</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
      </div>
      <div className="nav-links">
        <h4>Legal</h4>
        <Link to="/Privacy" className="nav-link text-neutral-500">Privacy</Link>
        <Link to="/Terms" className="nav-link text-neutral-500">Terms</Link>
        <Link to="/Cookies" className="nav-link text-neutral-500">Cookie</Link>
      </div>
    </nav>
  );
};

export default Navigation;
