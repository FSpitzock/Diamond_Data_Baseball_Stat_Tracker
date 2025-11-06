import { Link } from "react-router-dom";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link><br></br>
        <Link to="/Stats" className="nav-link">Stats</Link>
      </div>
    </nav>
  );
};

export default Navigation;
