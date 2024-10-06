import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./AboutStyle.scss";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="aboutPageId" className="aboutDiv page">
      <h1 className="header">A LITLLE ABOUT ME</h1>
      <img
        data-aos="zoom-out"
        className="profileImg"
        src="/images/b25e597b-57e8-47b5-a1ff-053daf1bfdfc.png"
        alt="profile Image"
      />
      <p className="description">
        Hey! My name is Ruth, and I'm a web and app developer with a passion for integrating complex logic into code.<br/> I currently work at <span className="redBold">UNA</span>, a startup focused on developing an AI-based dating application. Previously, I worked at <span className="redBold">WEBY</span>, a software house specializing in tailored projects for various clients, where I served as a Full Stack developer. I aspire to a career that allows me to channel my thinking ability through the creation of beautiful software and fascinating experiences. When I'm not on the computer,
         I enjoy riding my bike and traveling.
      </p>
    </div>
  );
};

export default About;
