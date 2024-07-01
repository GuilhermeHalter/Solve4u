import React, { useEffect, useState } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardProject from "../components/cardsProjects/CardsProjectsComp.jsx";
import CardCreateProject from "../components/cardsProjects/CardCreateProjectComp.jsx";
import CardAnalitycsComp from "../components/cardsProjects/cardAnalitycs/CardAnalitycsComp.jsx";

import "../css/screenStyle/projectScreenStyle/ProjectsScreen.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../assets/JavaScript/ThemeContext.jsx";


const Projects = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const { isDarkTheme } = useTheme();


  useEffect(() => {
    const localStorageProjects =
      JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(localStorageProjects);
  }, []);

  const handleCardClick = (project) => {
    navigate(`/inproject/${project.id}`, { state: { project } });
  };

  const openCard = () => {
    setCardVisible(true);
  };

  const closeCard = () => {
    setCardVisible(false);
    window.location.reload();
  };

  return (
    <div>
      <GlobalHeader />
      <Sidebar />
      <div className="project-screen">
        <header className="header">
          <h1 className="title">Your Project's</h1>

          <button className="ButtonNew" onClick={openCard}>
            New Project
          </button>
        </header>
        <div className="projects-container">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              project={project}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <section>
          <h2 className={`subtitle ${isDarkTheme ? 'dark' : 'light'}`}>Analityc's</h2>
          <div className="analytics-container">
            <CardAnalitycsComp />
          </div>
        </section>
      </div>
      {isCardVisible && <CardCreateProject onClose={closeCard} />}
    </div>
  );
};

export default Projects;
