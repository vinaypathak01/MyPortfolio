import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { TbStars } from "react-icons/tb";

const Nav = ({ activeNav, setActiveNav }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const anchor = event.target.closest("a");
    if (anchor && anchor.getAttribute("href") !== "#") {
      setActiveNav(anchor.getAttribute("href"));
    }
  };

  return (
    <nav>
      <a
        href="/"
        className={activeNav === "/" ? "active" : ""}
        onClick={handleClick}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={handleClick}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={handleClick}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={handleClick}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={handleClick}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#review"
        className={activeNav === "#review" ? "active" : ""}
        onClick={handleClick}
      >
        <TbStars />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={handleClick}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
