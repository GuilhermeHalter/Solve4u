import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import TaskCard from "../components/cardsProjects/cardTasks/CardTaskComp.jsx";
import { useLocation } from "react-router-dom";

import "../css/screenStyle/sectorScreenStyle/InSectorScreen.css";

const InSectorScreen = () => {
  const [tasks, setTasks] = useState([]);
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

  return (
    <div>
      <Sidebar />
      <GlobalHeader />
      <div className="containerTask">
        <div className="sectionTasks">
          {tasks.map((task) => (
            <TaskCard key={task.taskId} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InSectorScreen;
