import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SkillsContent from "../../components/Skills/SkillsContent";

import "./mySkillsStyle.scss";
const MySkills = () => {
  const [skillType, setSkillType] = useState("all");
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="skillsPageId" className="mySkillsComp page">
      <div className="skillsContent">
        <h1 className="header">My Skills</h1>
        <p className="description">
          I am a developer who believes in the importance of continuous improvement.
          In addition to honing my coding skills, I actively explore related
          fields such as testing and UX/UI design. This helps me create more
          comprehensive and user-focused applications.
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
