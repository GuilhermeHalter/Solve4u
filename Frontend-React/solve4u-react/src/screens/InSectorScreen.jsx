import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import TaskCard from "../components/cardsProjects/cardTasks/CardTaskComp.jsx";
import CardCreateTaskComp from "../components/cardsProjects/cardTasks/CardCreateTaskComp.jsx"; 
import { useLocation } from "react-router-dom";

import "../css/screenStyle/sectorScreenStyle/InSectorScreen.css";

const InSectorScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskCardVisible, setTaskCardVisible] = useState(false);
  const location = useLocation();
  const sector = location.state.sector;
  const sectorId = sector.sectorId;

  useEffect(() => {
    const fetchTasks = () => {
      const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(allTasks.filter((task) => task.sectorId === sectorId));
    };

    fetchTasks();
  }, [sectorId]);

  const openTaskCard = () => {
    setTaskCardVisible(true);
  };

  const closeTaskCard = () => {
    setTaskCardVisible(false);
    window.location.reload();
  };

  return (
    <div>
      <Sidebar />
      <GlobalHeader />
      <div className="menuContainer">
        <h1 className="titleInSector">Task's</h1>  
        <button className="ButtonCreateTask" onClick={openTaskCard}>
          New Task
        </button>
      </div>
      
      <div className="containerTask">
        <div className="sectionTasks">
          {tasks.map((task) => (
            <TaskCard key={task.taskId} task={task} />
          ))}
        </div>
      
      </div>
      {isTaskCardVisible && (
        <CardCreateTaskComp sectorId={sectorId} onClose={closeTaskCard} />
      )}
    </div>
  );
};

export default InSectorScreen;
