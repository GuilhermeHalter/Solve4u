import React, { useState } from "react";
import "../../../../css/cardStyle/cardTasks/CardTaskProcessComp.css";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import CardEditTaskComp from "../../../cardsProjects/cardTasks/CardEditTaskComp.jsx";

/**
 * Component to view details of an in-progress task and provide options for moving, editing, or deleting the task.
 *
 * @component
 * @example
 * const task = { taskId: 1, taskName: "Task 1", taskDescription: "Description", taskUser: "User", startDate: "2024-01-01", dateDeadline: "2024-01-10" };
 * const handleClose = () => {};
 * return <CardTaskProcessComp task={task} onClose={handleClose} />;
 * 
 * @param {Object} props - The properties of the component.
 * @param {Object} props.task - The task to display.
 * @param {Function} props.onClose - Function to close the modal.
 */

const CardTaskProcessComp = ({ task, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Moves the task to the next stage (stage "2") and saves it to localStorage.
   */
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

  /**
   * Deletes the task from localStorage.
   */
  const handleDeleteTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.taskId !== task.taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    onClose();
  };

  /**
   * Toggles the edit state.
   */
  const handleEditTask = () => {
    setIsEditing(true);
  };

  /**
   * Closes the edit modal.
   */
  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="modal-background-process">
      {isEditing ? (
        <CardEditTaskComp task={task} onClose={handleCloseEdit} />
      ) : (
        <div className="modal-process">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <div className="lineVertical"></div>
          <div className="modalContentLeft">
            <h2>{task.taskName}</h2>
            <p className="descriptionTaskCardProcess">{task.taskDescription}</p>
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
              <button className="EditTaskBtn" onClick={handleEditTask}>
                Edit task <HiPencil className="pencilTaskIcon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTaskProcessComp;
