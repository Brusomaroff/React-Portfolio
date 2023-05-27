import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 Bruso. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/brusomaroff">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/bryson-r-5193a1256">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/brysonruso">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

