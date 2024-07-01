import React from "react";

import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "../../../../css/cardStyle/cardTasks/CardTaskChekingComp.css";
import { useTheme } from "../../../../assets/JavaScript/ThemeContext.jsx"; 

/**
 * Component for checking and approving/failing tasks.
 *
 * @component
 * @example
 * const task = { taskId: 1, taskName: "Task 1", taskDescription: "Description", taskUser: "User", startDate: "2024-01-01", dateDeadline: "2024-01-10" };
 * const handleClose = () => {};
 * return <CardTaskChekingComp task={task} onClose={handleClose} />;
 * 
 * @param {Object} props - The properties of the component.
 * @param {Object} props.task - The task to be checked.
 * @param {Function} props.onClose - Function to close the modal.
 */

const CardTaskChekingComp = ({ task, onClose }) => {
  const { isDarkTheme} = useTheme();

  /**
   * Approves the task by updating the stage to "3" and saves it to localStorage.
   */
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

  /**
   * Fails the task by updating the stage to "1" and saves it to localStorage.
   */
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
    <div className="modal-backgroundChecking">
      <div className={`modalChecking ${isDarkTheme ? 'dark' : 'light'}`}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="lineVerticalChecking"> </div>

        <div className="modalContentLeftChecking">
          <h2>{task.taskName}</h2>
          <p className="descriptionTaskCardProcess"> {task.taskDescription}</p>
          <p>{task.taskUser}</p>
        </div>
        <hr className="modalDivisionChecking" />
        <div className="modalContentRightChecking">
          <div className="upRightChecking">
            <div className="dateTaks">
              <p>Start Date: {task.startDate}</p>
              <p>Deadline: {task.dateDeadline}</p>
            </div>

            <button
              className="notApproved-task-btn"
              onClick={handleNotApprovedTask}
            >
              Not Approved <IoClose className="xIcon" />
            </button>
            <button className="approved-task-btn" onClick={handleApprovedTask}>
              Approved <FaCheck className="checkIcon" />
            </button>
          </div>
          <hr className="horizontalDivisionChecking" />
          <div className="downRightChecking"></div>
        </div>
      </div>
    </div>
  );
};

export default CardTaskChekingComp;
