import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardCreateSectorComp from "../components/cardsProjects/CardCreateSectorComp.jsx";
import CardDeleteConfirmation from "../components/cardsProjects/CardDeleteConfirmation.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import SectorCard from "../components/cardsProjects/CardSectorComp.jsx";
import "../css/InProject.css";

const InProject = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSectorCardVisible, setSectorCardVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state.project;
  const projectId = project.id;

  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const fetchSectors = () => {
      const allSectors = JSON.parse(localStorage.getItem("sectors")) || [];
      const projectSectors = allSectors.filter(sector => sector.projectId === projectId);
      setSectors(projectSectors);
    };

    fetchSectors();
  }, [projectId]);

  const handleDeleteProject = () => {
    setShowConfirmation(true);
  };

  const deleteProjectAndRelatedSectors = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = projects.filter((item) => item.id !== project.id);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    const sectors = JSON.parse(localStorage.getItem("sectors")) || [];
    const updatedSectors = sectors.filter(sector => sector.projectId !== projectId);
    localStorage.setItem("sectors", JSON.stringify(updatedSectors));

    navigate("/projects");
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const openSectorCard = () => {
    setSectorCardVisible(true);
  };

  const closeSectorCard = () => {
    setSectorCardVisible(false);
    window.location.reload();
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

        <div className="sectionCards">
          {sectors.map(sector => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>

        <button className="ButtonDelete" onClick={handleDeleteProject}>
          Delete Project <MdDelete className="iconC" />
        </button>
      </div>
      {isSectorCardVisible && <CardCreateSectorComp projectId={projectId} onClose={closeSectorCard} />}
      {showConfirmation && (
        <CardDeleteConfirmation
          onConfirm={deleteProjectAndRelatedSectors}
          onCancel={closeConfirmation}
        />
      )}
    </div>
  );
};

export default InProject;
