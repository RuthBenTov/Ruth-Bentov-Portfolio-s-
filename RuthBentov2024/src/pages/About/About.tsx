import React, { useEffect } from "react";
import "./AboutStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="aboutPageId" className="aboutDiv">
      <h1 className="header">A LITLLE ABOUT ME</h1>
      <img
        data-aos="zoom-out"
        className="profileImg"
        src="../../../public/images/b25e597b-57e8-47b5-a1ff-053daf1bfdfc.png"
        alt="profile Image"
      />
      <p className="description">
        Hey! my name is Ruth and I'm a web and app developer with a passion for
        Insert complex logic into the code. Im currently study
        <span className="redBold"> computer science </span> at the Open
        University as a hobby, and work at
        <span className="redBold"> Weby</span> as Full Stack developer. I aspire
        to a career that will allow me to channel my thinking ability through
        the creation of beautiful software and fascinating experiences. when Im
        not on the computer I enjoy to ride a bike and refurbish furniture.
      </p>
    </div>
  );
};

export default About;
