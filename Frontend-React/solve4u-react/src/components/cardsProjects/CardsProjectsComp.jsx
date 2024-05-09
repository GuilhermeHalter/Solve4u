import React from 'react';
import "../../css/CardsProjectComp.css";

const CardProject = ({ project, onClick }) => (
  <div className="card-comp" onClick={() => onClick(project)}>
    <h3>{project.projectName}</h3>
    <p>{project.projectDescription}</p>
  </div>
);

export default CardProject;
