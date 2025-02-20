import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer__container">
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vinaypathakk/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/the_vinay_pathak/">
          <BsInstagram />
        </a>
        <a href="https://x.com/the_vinaypathak">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vinay Pathak. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
