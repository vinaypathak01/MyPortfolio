import React from "react";
import "./about.scss";
import { FaAward, FaTelegramPlane } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about">
      <h5>Unlock the mysteries of me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#1e3050" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year Experience</small>
            </article>
            <article className="about__card">
              <BsClipboardCheck className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>

          <p>
            Hello, I'm Vinay Pathak, a Software Developer specializing in web
            applications. I love cricket, football, and traveling. I'm always
            eager to improve my skills in Java, React, and full-stack
            development. Let's create something meaningful together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's chat <FaTelegramPlane />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
