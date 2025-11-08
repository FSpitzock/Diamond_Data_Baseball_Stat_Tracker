import React from "react";
import { Link } from "react-router-dom";
import NotFoundBot from "../assets/404Bot.jpg";


const NotFound: React.FC = () => {
  return (
    <div className="notfound">
        <img src= {NotFoundBot} alt="404 Page Not Found" />
      
      <h3>Sorry, the page you’re looking for doesn’t exist.</h3>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
