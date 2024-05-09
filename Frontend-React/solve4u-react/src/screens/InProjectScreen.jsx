import React, { useState } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import CardCreateSector from "../components/cardsProjects/CardCreateSectorComp";

import "../css/InProject.css";

const InProjectScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state.project;
  const projectId = project.id;

  const handleDeleteProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = projects.filter((item) => item.id !== project.id);

    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    navigate("/projects");
  };

  const [isSectorCardVisible, setSectorCardVisible] = useState(false);

  const openSectorCard = () => {
    setSectorCardVisible(true);
  };

  const closeSectorCard = () => {
    setSectorCardVisible(false);
  };

  return (
    <div>
      <Sidebar />
      <GlobalHeader />
      <div className="containerCard">
        <div className="conteinerHeader">
          <h1 className="titleI">{project.projectName}</h1>
          <button className="ButtonCreateSec" onClick={openSectorCard}>New Sector</button>
        </div>

        <p>Code: {project.codigo}</p>

        <div className="sectionCards"></div>

        <button className="ButtonDelete" onClick={handleDeleteProject}>
          Delete Project <MdDelete className="iconC" />
        </button>
      </div>
      {isSectorCardVisible && <CardCreateSector projectId={projectId} onClose={closeSectorCard} />}
    </div>
  );
};

export default InProjectScreen;
