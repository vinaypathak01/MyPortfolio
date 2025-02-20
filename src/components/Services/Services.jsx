import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="700"
      >
        The things i can do for you
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="900"
      >
        About Me
      </h2>

      <div className="container services__container">
        <article
          className="service"
          data-aos="fade-right"
          data-aos-anchor=".services__container"
          data-aos-duration="900"
        >
          <div className="service__head">
            <h3>Professional Experience</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Software Engineer(July 2024- Nov 2024) @Infodart Technology Ltd,
                India | Frontend Developer | React Specialist
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed responsive user interfaces using React.js for
                efficient and intuitive web applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implemented state management with Redux for centralized data
                flow and enhanced application performance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrated RESTful APIs to fetch and display data dynamically,
                ensuring seamless user interactions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Utilized Git for version control, managing code repositories,
                and facilitating team collaboration.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Actively engaged in learning and implementing new technologies
                to enhance development efficiency and stay updated with industry
                trends.
              </p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Software Engineer Trainee(November 2023- June 2024) @Infodart
                Technology Ltd,India | React | Core Java | My SQL
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborated with senior developers to design and implement
                responsive web interfaces using HTML, CSS, JavaScript, and
                React, ensuring optimal performance across devices and browsers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Assisted in debugging and testing applications, optimizing code
                for enhanced user experience while adhering to industry best
                practices and coding standards.
              </p>
            </li>
          </ul>
        </article>

        {/* Education */}

        <article
          className="service"
          data-aos="fade-up"
          data-aos-anchor=".services__container"
          data-aos-duration="1200"
        >
          <div className="service__head">
            <h3>My Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Graphic Era Hill University, Dehradun (August 2021-June 2023)
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Master of Computer Applications (MCA) with a strong focus on
                software development, Java, React, and SQL. Gained hands-on
                experience in building and enhancing web applications,
                including: Project Work: Developed an e-commerce website using
                JavaScript, HTML, CSS, and Bootstrap during my MCA,
                strengthening my front-end skills. Additionally, created a
                Java-based project to enhance my backend development expertise.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ongoing Learning: Actively enhancing my skills in backend
                development, Java, and refining my portfolio to support
                professional growth.
              </p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Soban Singh Jeena Campus, Almora || (August 2016-September 2019)
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Bachelor of Computer Applications (BCA) with a foundational
                focus on core programming concepts, databases, and software
                development. Gained a strong understanding of the basics of
                computer science, including: Core Programming Skills, Database
                Fundamentals,Software Development Basics, Project Work: Worked
                on small-scale projects to apply basic programming concepts, and
                explored web technologies.
              </p>
            </li>
          </ul>
        </article>

        {/* Certification  */}
        <article
          className="service"
          data-aos="fade-up"
          data-aos-anchor=".services__container"
          data-aos-duration="1200"
        >
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                SQL, MYSQL, POSTGRESQL & MONGODB: All-in-One Database Course
                <a
                  href="https://www.udemy.com/certificate/UC-9b363cb0-8ec9-42f5-8597-6503496ef416/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "10px",
                    color: "#f5425a",
                    textDecoration: "underline",
                  }}
                >
                  (View Certificate)
                </a>
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skills: SQL, MYSQL, POSTGRESQL, MONGODB</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Google Cloud Big Data and Machine Learning Fundamentals
                (Coursera)
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/LFET9B6AN4KY"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "10px",
                    color: "#f5425a",
                    textDecoration: "underline",
                  }}
                >
                  (View Certificate)
                </a>
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skills: Big Data</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Introduction To Java
                <a
                  href="https://drive.google.com/file/d/1ufaF_ZeM02oVk681N9KxCHuWR6sIKq8G/view"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "10px",
                    color: "#f5425a",
                    textDecoration: "underline",
                  }}
                >
                  (View Certificate)
                </a>
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skills: Core Java, JDBC, MYSQL</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <h5 style={{ color: "#3498db" }}>
                Web Development
                <a
                  href="https://drive.google.com/file/d/1uFTQPmo9B0jJqwP1H6xgejdAcBhwXWb0/view"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "10px",
                    color: "#f5425a",
                    textDecoration: "underline",
                  }}
                >
                  (View Certificate)
                </a>
              </h5>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skills: HTML, CSS, JavaScript</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
