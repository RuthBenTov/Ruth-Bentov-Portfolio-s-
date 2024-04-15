import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./homepageStyle.scss";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const goToIdElement = (idElem: string) => {
    const targetElement = document.getElementById(idElem);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="homePageId" className="homePage page">
      <img className="bgImg" src="/images/forest-7774205_640.jpg" alt="" />
      <div className="bgDiv"></div>
      <div>
        <p className="header">
          <span className="miniText">
            Hello! i’m <span className="red"> Ruth Bentov</span>, <br /> a
          </span>{" "}
          Full stack developer
        </p>
        <p className="description">
          with knowledge in various technologies aiding me in
          <span className="bold"> frontend</span> and
          <span className="bold"> backend</span> development. I primarily
          utilize
          <span className="bold"> React</span> and cutting-edge libraries to
          craft the perfect project. I thrive on achieving new milestones
          through learning and diligence.
        </p>

        <button
          data-aos="fade-down"
          onClick={() => goToIdElement("contactPageId")}
          className="hireMeBtn"
        >
          Hire Me
        </button>
        <button
          data-aos="fade-down"
          onClick={() => goToIdElement("projectsPageId")}
          className="projectsBtn"
        >
          Projects
        </button>
      </div>
      <div className="goDownDiv">
        <img
          onClick={() => goToIdElement("aboutPageId")}
          className="goDown"
          src="/images/Ellipsis@1.25x-10.0s-200px-200px.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
