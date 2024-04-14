import React, { FC, useEffect } from "react";
import "./projectCardStyle.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { projectsList } from "./projectList";
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const openSite = (which: string) => {
    window.open(which, "_blank");
  };
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={project.ImageUrl} alt="" />
      <div className="cardContent">
        <h3 className="projectName">{project.name}</h3>
        <p className="description">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}{" "}
            </span>
          ))}
        </div>
        <div className="btns">
          <button onClick={()=>openSite(project.demoUrl)} className="viewDemo">
            View Demo
          </button>
          <button onClick={()=>openSite(project.gitUrl)} className="viewCode">
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
