import { useEffect, useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import { projectsList } from "../../components/Projects/projectList";
import "./projectsPageStyle.scss";
const Projects = () => {
  const [chosenCategory, setChosenCategory] = useState("all");
  const [projectToVisible, setProjectToVisible] = useState(projectsList);

  useEffect(() => {
    if (chosenCategory != "all") {
      const filteredProjects = projectsList.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase() === chosenCategory.toLowerCase())
      );
      setProjectToVisible(filteredProjects);
    } else setProjectToVisible(projectsList);
  }, [chosenCategory]);
  return (
    <div id="projectsPageId" className="projectsPage page">
      <h1 className="header">Projects</h1>
      <div className="projectsCat">
        <div
          onClick={() => {
            setChosenCategory("all");
          }}
          className={`category ${chosenCategory === "all" && "isActive"}`}
        >
          All
        </div>
        <div
          onClick={() => {
            setChosenCategory("vanilla");
          }}
          className={`category ${chosenCategory === "vanilla" && "isActive"}`}
        >
          Vanilla
        </div>
        <div
          onClick={() => {
            setChosenCategory("react");
          }}
          className={`category ${chosenCategory === "react" && "isActive"}`}
        >
          React
        </div>
        <div
          onClick={() => {
            setChosenCategory("front&back");
          }}
          className={`category ${
            chosenCategory === "front&back" && "isActive"
          }`}
        >
          Front & Back
        </div>
        <div
          onClick={() => {
            setChosenCategory("games");
          }}
          className={`category ${chosenCategory === "games" && "isActive"}`}
        >
          Games
        </div>
      </div>
      <div className="projectsCards">
        {projectToVisible.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
