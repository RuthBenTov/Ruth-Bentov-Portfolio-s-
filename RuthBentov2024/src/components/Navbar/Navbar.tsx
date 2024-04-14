import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./navbarStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [currentPage, setCurrentPage] = useState("homePageId");

  const scrollToIdElem = (idElem: string) => {
    const targetElement = document.getElementById(idElem);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(idElem);
    }
  };
  return (
    <div className="navbar">
      <div className="navbarContent">
        <button
          onClick={() => {
            window.location.href =
              "https://drive.google.com/uc?export=download&id=1nYMn1jIEnaQSirvAIS4etYkqguwS37Bj";
          }}
          className="downloadBtn"
        >
          Download CV
        </button>
        <ul>
          <li
            onClick={() => scrollToIdElem("homePageId")}
            // data-aos="fade-left"
            className={currentPage === "homePageId" ? "isActive" : ""}
          >
            Home
          </li>
          <li
            onClick={() => scrollToIdElem("aboutPageId")}
            // data-aos="fade-right"
            className={currentPage === "aboutPageId" ? "isActive" : ""}
          >
            About
          </li>
          <li
            onClick={() => scrollToIdElem("skillsPageId")}
            // data-aos="fade-right"
            className={currentPage === "skillsPageId" ? "isActive" : ""}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToIdElem("projectsPageId")}
            // data-aos="fade-right"
            className={currentPage === "projectsPageId" ? "isActive" : ""}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToIdElem("contactPageId")}
            // data-aos="fade-right"
            className={currentPage === "contactPageId" ? "isActive" : ""}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
