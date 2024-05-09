import React, { useEffect, useState } from 'react';
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardProject from "../components/cardsProjects/CardsProjectsComp.jsx";
import CardCreateProject from "../components/cardsProjects/CardCreateProjectComp.jsx";

import "../css/ProjectsScreen.css"
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const localStorageProjects = JSON.parse(localStorage.getItem('projects')) || [];
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
        <header className='header'>
          <h1 className='title'>Your Project's</h1>

          <button className='ButtonNew' onClick={openCard}>New Project</button>
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
          <h2 className="subtitle">Analityc's</h2>
          <div className="analytics-container">
          </div>
        </section>
      </div>
      {isCardVisible && <CardCreateProject onClose={closeCard} /> }
    </div>
  );
};

export default Projects;
