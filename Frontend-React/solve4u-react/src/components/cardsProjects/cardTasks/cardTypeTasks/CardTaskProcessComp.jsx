import React from "react";
import "../../../../css/cardStyle/cardTasks/CardTaskProcessComp.css";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";

const CardTaskProcessComp = ({ task, onClose }) => {
  const handleMoveTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, taskStage: "2" };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    onClose();
  };

  const handleDeleteTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.taskId !== task.taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    onClose();
  };

  return (
    <div className="modal-background-process">
      <div className="modal-process">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="lineVertical"> </div>
        <div className="modalContentLeft">
          <h2>{task.taskName}</h2>
          <p className="descriptionTaskCardProcess"> {task.taskDescription}</p>
          <p>{task.taskUser}</p>
        </div>
        <hr className="modalDivision" />
        <div className="modalContentRight">
          <div className="upRight">
            <div className="dateTaks">
              <p>Start Date: {task.startDate}</p>
              <p>Deadline: {task.dateDeadline}</p>
            </div>

            <button className="DeleteTaskBtn" onClick={handleDeleteTask}>
              Delete task <MdDelete className="deleteTaskIcon" />
            </button>
            <button className="MoveTaskBtn" onClick={handleMoveTask}>
              Move Task <FaArrowRight className="arrowTaskIcon" />
            </button>
          </div>
          <hr className="horizontalDivision" />
          <div className="downRight">
            <button className="EditTaskBtn">
              Edit task <HiPencil className="pencilTaskIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTaskProcessComp;
