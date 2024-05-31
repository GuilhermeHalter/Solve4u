import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import TaskCard from "../components/cardsProjects/cardTasks/CardTaskComp.jsx";
import CardCreateTaskComp from "../components/cardsProjects/cardTasks/CardCreateTaskComp.jsx"; 
import CardTaskProcessComp from "../components/cardsProjects/cardTasks/cardTypeTasks/CardTaskProcessComp.jsx"; 
import CardTaskChekingComp from "../components/cardsProjects/cardTasks/cardTypeTasks/CardTaskChekingComp.jsx";
import { useLocation } from "react-router-dom";

import "../css/screenStyle/sectorScreenStyle/InSectorScreen.css";

const InSectorScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskCardVisible, setTaskCardVisible] = useState(false);
  const [isTaskCardProcessVisible, setTaskCardProcessVisible] = useState(false);
  const [isTaskCardCheckingVisible, setTaskCardCheckingVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
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

  const openTaskCardProcess = (task) => {
    setSelectedTask(task);
    setTaskCardProcessVisible(true);
  };

  const closeTaskCardProcess = () => {
    setTaskCardProcessVisible(false);
    setSelectedTask(null);
    window.location.reload();
  };

  const openTaskCardChecking = (task) => {
    setSelectedTask(task);
    setTaskCardCheckingVisible(true);
  };

  const closeTaskCardChecking = () => {
    setTaskCardCheckingVisible(false);
    setSelectedTask(null);
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
      <div className="containerTasks">
        <div className="sectionTasksProcess">
          {tasks.filter((task) => task.taskStage == 1).map((task) => (
            <div className="cardProcess" key={task.taskId} onClick={() => openTaskCardProcess(task)}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
        <hr className="division"/>
        <div className="sectionTasksChecking">
          {tasks.filter((task) => task.taskStage == 2).map((task) => (
            <div className="cardChecking" key={task.taskId} onClick={() => openTaskCardChecking(task)}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
        <hr className="division"/>
        <div className="sectionTasksFinished">
          {tasks.filter((task) => task.taskStage == 3).map((task) => (
            <TaskCard key={task.taskId} task={task} />
          ))}
        </div>
        <hr className="division"/>
        <div className="sectionTasksPending">
          {tasks.filter((task) => task.taskStage == 4).map((task) => (
            <TaskCard key={task.taskId} task={task} />
          ))}
        </div>
      </div>
      {isTaskCardVisible && (
        <CardCreateTaskComp sectorId={sectorId} onClose={closeTaskCard} />
      )}
      {isTaskCardProcessVisible && selectedTask && (
        <CardTaskProcessComp task={selectedTask} onClose={closeTaskCardProcess} />
      )}
      {isTaskCardCheckingVisible && selectedTask && (
        <CardTaskChekingComp task={selectedTask} onClose={closeTaskCardChecking} />
      )}
    </div>
  );
};

export default InSectorScreen;
