import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardCreateSectorComp from "../components/cardsProjects/CardCreateSectorComp.jsx";
import CardDeleteConfirmation from "../components/cardsProjects/CardDeleteConfirmation.jsx";
import CardEditProjectComp from "../components/cardsProjects/CardEditProjectComp.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import SectorCard from "../components/cardsProjects/CardSectorComp.jsx";
import "../css/screenStyle/projectScreenStyle/InProjectScreen.css";

const InProject = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSectorCardVisible, setSectorCardVisible] = useState(false);
  const [isEditProjectVisible, setEditProjectVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [sectors, setSectors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state.project;
  const projectId = project.id;

  useEffect(() => {
    const fetchProjectsAndSectors = () => {
      const allProjects = JSON.parse(localStorage.getItem("projects")) || [];
      const allSectors = JSON.parse(localStorage.getItem("sectors")) || [];
      setProjects(allProjects);
      setSectors(allSectors.filter((sector) => sector.projectId === projectId));
    };

    fetchProjectsAndSectors();
  }, [projectId]);

  const handleDeleteProject = () => {
    setShowConfirmation(true);
  };

  const deleteProjectAndRelatedSectors = () => {
    const updatedProjects = projects.filter((item) => item.id !== project.id);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);

    const updatedSectors = sectors.filter(
      (sector) => sector.projectId !== projectId
    );
    localStorage.setItem("sectors", JSON.stringify(updatedSectors));
    setSectors(updatedSectors);

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

  const handleSectorClick = (sector) => {
    navigate(`/insector/${sector.sectorId}`, { state: { sector } });
  };

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((item) => {
      if (item.id === updatedProject.id) {
        return updatedProject;
      }
      return item;
    });
    setProjects(updatedProjects);

    const updatedSectors = sectors.map((sector) => {
      if (sector.projectId === updatedProject.id) {
        return {
          ...sector,
          projectName: updatedProject.projectName,
        };
      }
      return sector;
    });
    setSectors(updatedSectors);

    window.location.reload();
  };

  return (
    <div>
      <Sidebar />
      <GlobalHeader />
      <div className="containerCard">
        <div className="conteinerHeader">
          <div className="sections1">
            <h1 className="titleI">{project.projectName}</h1>
          </div>

          <div className="sections2">
            <button className="ButtonCreateSec" onClick={openSectorCard}>
              New Sector
            </button>
            <button
              className="ButtonEditProject"
              onClick={() => setEditProjectVisible(true)}
            >
              Edit Project
            </button>
          </div>
        </div>

        <p>Code: {project.codigo}</p>

        <div className="sectionCards">
          {sectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              onClick={handleSectorClick}
            />
          ))}
        </div>
      </div>
      <div className="containerButton">
        <button className="ButtonDelete" onClick={handleDeleteProject}>
          Delete Project <MdDelete className="iconC" />
        </button>
      </div>

      {isSectorCardVisible && (
        <CardCreateSectorComp projectId={projectId} onClose={closeSectorCard} />
      )}
      {showConfirmation && (
        <CardDeleteConfirmation
          onConfirm={deleteProjectAndRelatedSectors}
          onCancel={closeConfirmation}
        />
      )}
      {isEditProjectVisible && (
        <CardEditProjectComp
          project={project}
          onClose={() => setEditProjectVisible(false)}
          onUpdateProject={handleUpdateProject}
        />
      )}
    </div>
  );
};

export default InProject;
