import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} E-Auction. All rights reserved.
      </div>
      <div className="footer__links">
        <a href="#" className="footer__link">Privacy Policy</a>
        <a href="#" className="footer__link">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;