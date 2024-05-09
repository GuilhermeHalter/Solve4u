import React, { useEffect, useState } from 'react';
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardProject from "../components/cardsProjects/CardsProjectsComp.jsx";
import "../css/ProjectsScreen.css"

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const localStorageProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(localStorageProjects);
  }, []);

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
              title={project.projectName}
              content={project.projectDescription}
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
