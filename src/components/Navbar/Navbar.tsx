import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./navbarStyle.scss";

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
      // setCurrentPage(idElem);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {}, 200);

      const stopScrollObjects = document.getElementsByClassName("page");
      const scrollPosition = window.scrollY;

      if (stopScrollObjects) {
        for (let i = 0; i < stopScrollObjects.length; i++) {
          let objectPosition =
            stopScrollObjects[i].getBoundingClientRect().top + window.scrollY;

          if (scrollPosition >= objectPosition) {
            switch (i) {
              case 0:
                setCurrentPage("homePageId");
                break;
              case 1:
                setCurrentPage("aboutPageId");
                break;
              case 2:
                setCurrentPage("skillsPageId");
                break;
              case 3:
                setCurrentPage("projectsPageId");
                break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbarContent">
        <button
          onClick={() => {
            window.location.href =
              "https://drive.google.com/uc?export=download&id=13ywj6oiolWo1lOYst6qBFZ0TtBidQ2zu";
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
