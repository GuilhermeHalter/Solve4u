import React from "react";
import "../../css/cardStyle/CardsProjectComp.css";

/**
 * Component for displaying a project card.
 *
 * @component
 * @example
 * const project = { projectName: "Project 1", projectDescription: "This is a description" };
 * const handleClick = (project) => { console.log(project); };
 * return <CardProject project={project} onClick={handleClick} />;
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.project - The project object containing details.
 * @param {string} props.project.projectName - The name of the project.
 * @param {string} props.project.projectDescription - The description of the project.
 * @param {Function} props.onClick - Function to call when the project card is clicked.
 */

const CardProject = ({ project, onClick }) => (
  <div className="card-comp" onClick={() => onClick(project)}>
    <h3>{project.projectName}</h3>
    <p>{project.projectDescription}</p>
  </div>
);

export default CardProject;
