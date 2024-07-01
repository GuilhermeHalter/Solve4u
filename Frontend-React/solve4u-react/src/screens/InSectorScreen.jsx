import React, { useState, useEffect } from "react";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import TaskCard from "../components/cardsProjects/cardTasks/CardTaskComp.jsx";
import CardCreateTaskComp from "../components/cardsProjects/cardTasks/CardCreateTaskComp.jsx";
import CardTaskProcessComp from "../components/cardsProjects/cardTasks/cardTypeTasks/CardTaskProcessComp.jsx";
import CardTaskChekingComp from "../components/cardsProjects/cardTasks/cardTypeTasks/CardTaskChekingComp.jsx";
import CardTaskFinishedComp from "../components/cardsProjects/cardTasks/cardTypeTasks/CardTaskFinishedComp.jsx";
import CardDeleteSectorConfirmation from "../components/cardsProjects/CardDeleteSectorConfirmation.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import "../css/screenStyle/sectorScreenStyle/InSectorScreen.css";

const InSectorScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskCardVisible, setTaskCardVisible] = useState(false);
  const [isTaskCardProcessVisible, setTaskCardProcessVisible] = useState(false);
  const [isTaskCardCheckingVisible, setTaskCardCheckingVisible] = useState(false);
  const [isTaskCardFinishedVisible, setTaskCardFinishedVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const location = useLocation();
  const sector = location.state.sector;
  const sectorId = sector.sectorId;
  const navigate = useNavigate();

  const fetchTasks = () => {
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(allTasks.filter((task) => task.sectorId === sectorId));
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks);

    return () => clearInterval(interval);
  }, [sectorId]);

  const openTaskCard = () => {
    setTaskCardVisible(true);
  };

  const closeTaskCard = () => {
    setTaskCardVisible(false);
  };

  const openTaskCardProcess = (task) => {
    setSelectedTask(task);
    setTaskCardProcessVisible(true);
  };

  const closeTaskCardProcess = () => {
    setTaskCardProcessVisible(false);
    setSelectedTask(null);
  };

  const openTaskCardChecking = (task) => {
    setSelectedTask(task);
    setTaskCardCheckingVisible(true);
  };

  const closeTaskCardChecking = () => {
    setTaskCardCheckingVisible(false);
    setSelectedTask(null);
  };

  const openTaskCardFinished = (task) => {
    setSelectedTask(task);
    setTaskCardFinishedVisible(true);
  };

  const closeTaskCardFinished = () => {
    setTaskCardFinishedVisible(false);
    setSelectedTask(null);
  };

  const handleDeleteSector = () => {
    setShowDeleteConfirmation(true);
  };

  const deleteSectorAndRelatedTasks = () => {
    const updatedSectors = JSON.parse(localStorage.getItem("sectors")) || [];
    const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove o setor específico
    const filteredSectors = updatedSectors.filter(sector => sector.sectorId !== sectorId);

    // Remove as tasks relacionadas ao setor específico
    const filteredTasks = updatedTasks.filter(task => task.sectorId !== sectorId);

    // Atualiza o localStorage
    localStorage.setItem("sectors", JSON.stringify(filteredSectors));
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    navigate("/projects");
  };

  const closeDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
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
      
      <div className="containerGlobalSector">
        <div className="sectionCardsTasks">
          <h3>Process</h3>
          <div className="sectionTasksProcess">
          {tasks
            .filter((task) => task.taskStage == 1)
            .map((task) => (
              <div
                className="cardProcess"
                key={task.taskId}
                onClick={() => openTaskCardProcess(task)}
              >
                <TaskCard task={task} />
              </div>
            ))}
        </div>
        </div>
        <hr className="division" />

        <div className="sectionCardsTasks">
          <h3>Checking</h3>
          <div className="sectionTasksChecking">
          {tasks
            .filter((task) => task.taskStage == 2)
            .map((task) => (
              <div
                className="cardChecking"
                key={task.taskId}
                onClick={() => openTaskCardChecking(task)}
              >
                <TaskCard task={task} />
              </div>
            ))}
        </div>
        </div>
        <hr className="division" />

        <div className="sectionCardsTasks">
          <h3>Finished</h3>
          <div className="sectionTasksFinished">
          {tasks
            .filter((task) => task.taskStage == 3)
            .map((task) => (
              <div
                className="cardFinished"
                key={task.taskId}
                onClick={() => openTaskCardFinished(task)}
              >
                <TaskCard task={task} />
              </div>
            ))}
        </div>
        </div>
        <hr className="division" />

        <div className="sectionCardsTasks">
          <h3>Pending</h3>
          <div className="sectionTasksPending">
            {tasks
              .filter((task) => task.taskStage === 4)
              .map((task) => (
                <TaskCard key={task.taskId} task={task} />
              ))}
          </div>
        </div>
      </div>
      

      <div className="containerButton">
        <button className="ButtonDeleteSector" onClick={handleDeleteSector}>
          Delete Sector <MdDelete />
        </button>
      </div>

      {isTaskCardVisible && (
        <CardCreateTaskComp sectorId={sectorId} onClose={closeTaskCard} />
      )}
      {isTaskCardProcessVisible && selectedTask && (
        <CardTaskProcessComp
          task={selectedTask}
          onClose={closeTaskCardProcess}
        />
      )}
      {isTaskCardCheckingVisible && selectedTask && (
        <CardTaskChekingComp
          task={selectedTask}
          onClose={closeTaskCardChecking}
        />
      )}
      {isTaskCardFinishedVisible && selectedTask && (
        <CardTaskFinishedComp
          task={selectedTask}
          onClose={closeTaskCardFinished}
        />
      )}
      {showDeleteConfirmation && (
        <CardDeleteSectorConfirmation
          onConfirm={deleteSectorAndRelatedTasks}
          onCancel={closeDeleteConfirmation}
        />
      )}
    </div>
  );
};

export default InSectorScreen;
