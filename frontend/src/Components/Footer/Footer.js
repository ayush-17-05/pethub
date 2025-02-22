import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PetHub Logo" />
          <p>PetHub</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach us at{" "}
          <a className="mail-links" href="#">
            pethub@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {/* <a
            className="contact-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a> */}
          |
          <a
            className="contact-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          |
          <a
            className="contact-links"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; 2024 </p>
      </div>
    </footer>
  );
};

export default Footer;
