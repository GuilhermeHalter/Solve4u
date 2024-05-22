import React from "react";

const CardTaskChekingComp = ({ task, onClose }) => {
  const handleApprovedTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const approvedTasks = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, taskStage: "3" };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(approvedTasks));
    onClose();
  };

  const handleNotApprovedTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const notApprovedTask = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, taskStage: "1" };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(notApprovedTask));
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Cheking Task: {task.taskName}</h2>
        <p>Description: {task.taskDescription}</p>
        <p>Assigned to: {task.taskUser}</p>
        <p>Deadline: {task.dateDeadline}</p>
        <button className="approved-task-btn" onClick={handleApprovedTask}>
          Approved
        </button>
        <button className="notApproved-task-btn" onClick={handleNotApprovedTask}>
          Not Approved
        </button>
      </div>
    </div>
  );
};

export default CardTaskChekingComp;
