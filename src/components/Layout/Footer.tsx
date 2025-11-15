import React from "react";
import Navigation from "../Layout/Navigation";
import { Link } from "react-router-dom";
import Logo from "../../assets/diamond-data-logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="mt-48 py-6 w-full bg-[var(--background)] border-t">
      <div className="">

        {/* Branding + Navigation */}
        <div className="flex flex-col md:flex-row items-start">
          <Link to="/" className="w-full">
            <img 
              src={Logo} 
              alt="App Logo" 
              className="h-8 opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* Nav */}
            <Navigation />
        </div>

        {/* Copy / Legal */}
        <div className="flex flex-row justify-between items-center pt-4">
          <p className="text-neutral-500 text-xs">&copy; {new Date().getFullYear()} Diamond Data LLC.</p>
          <p className="text-neutral-500 text-xs">Created by Dwayne Burns and Frank Spitzock</p>
          <p className="text-neutral-500 text-xs">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
