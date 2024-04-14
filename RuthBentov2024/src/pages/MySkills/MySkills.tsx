import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SkillsContent from "../../components/Skills/SkillsContent";
import { frontendSkillsIcons } from "../../components/Skills/icons";
import AOS from "aos";
import "aos/dist/aos.css";

import "./mySkillsStyle.scss";
const MySkills = () => {
  const [skillType, setSkillType] = useState("all");
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="skillsPageId" className="mySkillsComp">
      <div className="skillsContent">
        <h1 className="header">My Skills</h1>
        <p className="description">
          I"m all about websites and apps in end to end (front and back),
          focusing on both functionality and aesthetics . My forte lies in
          solving logic-based and computational challenges, leveraging my swift
          learning and quick thinking to explore new libraries and concepts for
          efficient problem-solving.
        </p>
        <div className="skillsBody">
          <div className="skillsLabels">
            <div
              data-aos="fade-down"
              className={`label ${skillType === "frontend" && "isActive"}`}
              onClick={() => setSkillType("frontend")}
            >
              Frontend
              <MdKeyboardDoubleArrowRight />
            </div>
            <div
              data-aos="fade-down"
              className={`label ${skillType === "backend" && "isActive"}`}
              onClick={() => setSkillType("backend")}
            >
              Backend
              <MdKeyboardDoubleArrowRight />
            </div>
            <div
              data-aos="fade-down"
              className={`label ${skillType === "devSkills" && "isActive"}`}
              onClick={() => setSkillType("devSkills")}
            >
              development skills
              <MdKeyboardDoubleArrowRight />
            </div>
            <div
              data-aos="fade-down"
              className={`label ${skillType === "languages" && "isActive"}`}
              onClick={() => setSkillType("languages")}
            >
              languages
              <MdKeyboardDoubleArrowRight />
            </div>
          </div>
          <SkillsContent skillType={skillType} />
        </div>{" "}
      </div>
    </div>
  );
};

export default MySkills;
