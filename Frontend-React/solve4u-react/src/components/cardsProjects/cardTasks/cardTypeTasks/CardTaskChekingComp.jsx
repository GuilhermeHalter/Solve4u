import React from "react";

import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



import "../../../../css/cardStyle/cardTasks/CardTaskChekingComp.css";

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
    <div className="modal-backgroundChecking">
      <div className="modalChecking">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="lineVerticalChecking"> </div>
        
        <div className="modalContentLeftChecking">
           <h2>{task.taskName}</h2>
           <p> {task.taskDescription}</p>
           <p>{task.taskUser}</p>
          
        </div>
        <hr className="modalDivisionChecking"/>
        <div className="modalContentRightChecking">
        <div className="upRightChecking">
                <div className="dateTaks">
                  <p>Deadline: {task.startDate}</p>
                  <p>Deadline: {task.dateDeadline}</p>
                </div>

              <button className="notApproved-task-btn" onClick={handleNotApprovedTask}>
                  Not Approved <IoClose className="xIcon" />
              </button>
              <button className="approved-task-btn" onClick={handleApprovedTask}>
                Approved <FaCheck className="checkIcon" />
              </button>
              
        </div>
        <hr className="horizontalDivisionChecking"/>
        <div className="downRightChecking"></div>

        </div>
      
      </div>
    </div>
  );
};

export default CardTaskChekingComp;
