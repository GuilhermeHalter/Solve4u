import React from "react";

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

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Process Task: {task.taskName}</h2>
        <p>Description: {task.taskDescription}</p>
        <p>Assigned to: {task.taskUser}</p>
        <p>Deadline: {task.dateDeadline}</p>
        <button className="move-task-btn" onClick={handleMoveTask}>
          Move Task
        </button>
      </div>
    </div>
  );
};

export default CardTaskProcessComp;
