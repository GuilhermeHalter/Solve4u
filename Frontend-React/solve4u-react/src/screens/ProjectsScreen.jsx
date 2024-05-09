import React, { useEffect, useState } from 'react';
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardProject from "../components/cardsProjects/CardsProjectsComp.jsx";
import "../css/ProjectsScreen.css"
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const localStorageProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(localStorageProjects);
  }, []);

  const handleCardClick = (project) => {
    navigate(`/inproject/${project.id}`, { state: { project } });
  };

  return (
    <div>
      <GlobalHeader />
      <Sidebar />
      <div className="project-screen">
        <header>
          <h1>Seus Projetos</h1>
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
          <h2 className="subtitle">Análises</h2>
          <div className="analytics-container">
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
