import { FC, useEffect } from "react";
import {
  backendSkills,
  backendSkillsIcons,
  devSkills,
  devSkillsIcons,
  frontendSkills,
  frontendSkillsIcons,
  languagesSkills,
  languagesSkillsIcons,
} from "./icons";
import AOS from "aos";
import "aos/dist/aos.css";

interface SkillsContentProps {
  skillType: string;
}

const SkillsContent: FC<SkillsContentProps> = ({ skillType }) => {
  let skillsIconsArray;
  let skillsArray: string[];

  switch (skillType) {
    case "frontend":
      skillsIconsArray = frontendSkillsIcons;
      skillsArray = frontendSkills;
      break;

    case "backend":
      skillsIconsArray = backendSkillsIcons;
      skillsArray = backendSkills;
      break;

    case "devSkills":
      skillsIconsArray = devSkillsIcons;
      skillsArray = devSkills;
      break;

    case "languages":
      skillsIconsArray = languagesSkillsIcons;
      skillsArray = languagesSkills;
      break;

    default:
      skillsIconsArray = frontendSkillsIcons
        .concat(backendSkillsIcons)
        .concat(devSkillsIcons)
        .concat(languagesSkillsIcons);
      skillsArray = [];
      break;
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="skillContent">
      <div className="icons">
        {skillsIconsArray.map((icon, index) => (
          <div data-aos="flip-up" key={index}>
            {icon}
          </div>
        ))}
      </div>
      <div className="skillsName">
        {skillsArray.map((skill, index) => (
          <p className="skillName" key={index}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
