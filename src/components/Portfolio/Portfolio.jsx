import { useState } from "react";
import "./portfolio.css";
import Modal from "../Modal/Modal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Bharat Seats CRM Portal",
      deployedLink: "https://still-cliffs-68409.herokuapp.com/dashboard/app",
      image: require("../../assets/BS.png"),
      fadeDuration: "1000",
      githubLink: "Watch-Store",
      description:
        "Developed an admin portal using React to facilitate efficient management of multiple business operations, including User, Profile, Supplier, and Delivery Management.",
      toolsUsed: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "BootStrap",
        "Material UI",
      ],
    },
    {
      name: "Eauset CRM Portal",
      deployedLink: "https://nameless-basin-36851.herokuapp.com/",
      image: require("../../assets/eauset.png"),
      githubLink: "Watch-Store",
      description:
        "Developed an admin portal using React to facilitate efficient management of multiple business operations, including User, Profile, Supplier, and Delivery Management.",
      fadeDuration: "1100",
      toolsUsed: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    // {
    //   name : "weBlog",
    //   deployedLink: "https://bloggersintech.herokuapp.com/login",
    //   image: require('../../assets/weBlog.png'),
    //   fadeDuration:'1200',
    //   description:"CMS-style blog site that can publish articles, blog posts, thoughts and opinions",
    //   toolsUsed: ['Handlebars','mySQl','NodeJs','Express','Bootstrap','sequelize']
    // },
    // {
    //   name:"BERG-Maps",
    //   deployedLink: "https://for-timi.github.io/BERG-Maps/",
    //   image: require('../../assets/berg.png'),
    //   fadeDuration:'1300',
    //   description:"A web application designed to allow users to get directions and uses real-time traffic information to find the best route to your destination.",
    //   toolsUsed: ['Mapbox API','tailwind','HTML/CSS','localStorage']
    // },
    // {
    //   name: "AutoAuto",
    //   deployedLink: "https://stormy-wildwood-35895.herokuapp.com/",
    //   image: require('../../assets/autoAuto.png'),
    //   fadeDuration:'1400',
    //   description:"A full stack web application that allows users to buy cars, book test drives and so much more",
    //   toolsUsed: ['Handlebars','mySQl','NodeJs','Express','Bootstrap','sequelize']
    // },

    {
      name: "Watch Store",
      deployedLink: "https://salty-everglades-36024.herokuapp.com/",
      image: require("../../assets/WatchProject.PNG"),
      githubLink: "Watch-Store",
      fadeDuration: "1500",
      description:
        "Developed a visually captivating and responsive watch e-commerce platform using HTML, CSS, and JavaScriptshowcasing a sleek and modern design",
      toolsUsed: ["JavaScript", "HTML/CSS"],
    },
  ];

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="portfolio">
      <h5
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="700"
      >
        My most recent projects
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="900"
      >
        My Portfolio
      </h2>

      <div className="container portfolio__container">
        {projects.map(
          ({
            name,
            image,
            deployedLink,
            githubLink,
            description,
            toolsUsed,
            fadeDuration,
          }) => (
            <article
              className="portfolio__item"
              key={name}
              data-aos="fade-up"
              data-aos-anchor=".portfolio__container"
              data-aos-duration={fadeDuration}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
                className="portfolio__item-name"
                onClick={() =>
                  handleClick({
                    name,
                    image,
                    deployedLink,
                    githubLink,
                    toolsUsed,
                    description,
                  })
                }
              >
                {name}
              </h3>

              <div className="portfolio__item-cta">
                <a
                  className="btn"
                  href={`https://github.com/vinaypathak01${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-primary"
                  href={deployedLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        )}
      </div>

      {isModalOpen && (
        <Modal closeModal={handleClick} project={selectedProject} />
      )}
    </section>
  );
};

export default Portfolio;
