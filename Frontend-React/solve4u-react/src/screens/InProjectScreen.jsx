import React from 'react';
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import { useLocation, useNavigate } from 'react-router-dom'; // Importe useNavigate em vez de useHistory

import "../css/InProject.css"

const InProject = () => {
  const navigate = useNavigate(); // Use useNavigate em vez de useHistory
  const location = useLocation();
  const project = location.state.project;

  const handleDeleteProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = projects.filter(item => item.id !== project.id);

    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    navigate("/projects"); // Use navigate para redirecionar
  };

  return (
    <div>
        <Sidebar />
        <GlobalHeader />
        <div className="containerCard">
            <h3>{project.projectName}</h3>
            <p>{project.projectDescription}</p>
            <button onClick={handleDeleteProject}>Deletar Projeto</button>
        </div>
    </div>
  );
};

export default InProject;
