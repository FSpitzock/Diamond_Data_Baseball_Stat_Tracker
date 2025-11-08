import React from "react";
import Navigation from "../Layout/Navigation";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side — Branding */}
        <div className="footer-branding">
          <h2 className="footer-title">Diamond Data Stats</h2>
          <p className="footer-sub">Quick Links</p>

          <div className="footer-nav">
            <Navigation />
          </div>
        </div>

        {/* Right Side — Copyright */}
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Diamond Data LLC.</p>
          <p>Created by Dwayne Burns and Frank Spitzock.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
