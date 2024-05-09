import React from 'react';
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import { useLocation } from 'react-router-dom';

import "../css/InProject.css"

const InProject = () => {
  const location = useLocation();
  const project = location.state.project;

  return (
    <div>
        <Sidebar />
        <GlobalHeader />
        <div className="containerCard">
            <h3>{project.projectName}</h3>
            <p>{project.projectDescription}</p>
        </div>
    </div>
  );
};

export default InProject;
