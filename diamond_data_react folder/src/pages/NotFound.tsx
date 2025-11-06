import React from "react";
import { Link } from "react-router-dom";


const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
