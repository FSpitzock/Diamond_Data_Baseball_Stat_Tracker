import React from "react";
import Navigation from "../Layout/Navigation";
import { Link } from "react-router-dom";
import Logo from "../../assets/diamond-data-logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding + Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-100">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={Logo} 
              alt="App Logo" 
              className="h-8 w-auto opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* Nav */}
          <div className="text-sm">
            <Navigation />
          </div>
        </div>

        {/* Copy / Legal */}
        <div className="text-center md:text-right text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Diamond Data LLC.</p>
          <p>Created by Dwayne Burns and Frank Spitzock</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
