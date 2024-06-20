import React from "react";

import "../../../../css/cardStyle/cardTasks/CardTaskFinishedComp.css";

/**
 * Component to view details of a finished task.
 *
 * @component
 * @example
 * const task = { taskId: 1, taskName: "Task 1", taskDescription: "Description", taskUser: "User", startDate: "2024-01-01", dateDeadline: "2024-01-10" };
 * const handleClose = () => {};
 * return <CardTaskFinishedComp task={task} onClose={handleClose} />;
 * 
 * @param {Object} props - The properties of the component.
 * @param {Object} props.task - The task to display.
 * @param {Function} props.onClose - Function to close the modal.
 */

const CardTaskFinishedComp = ({ task, onClose }) => {
  return (
    <div className="modal-backgroundFinished">
      <div className="modalFinished">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="lineVerticalFinished"> </div>

        <div className="modalContentLeftFinished">
          <h2>{task.taskName}</h2>
          <p className="descriptionTaskCardProcess"> {task.taskDescription}</p>
          <p>{task.taskUser}</p>
        </div>
        <hr className="modalDivisionFinished" />
        <div className="modalContentRightFinished">
          <div className="upRightFinished">
            <div className="dateTaks">
              <p>Deadline: {task.startDate}</p>
              <p>Deadline: {task.dateDeadline}</p>
            </div>
          </div>
          <hr className="horizontalDivisionFinished" />
          <div className="downRightFinished"></div>
        </div>
      </div>
    </div>
  );
};

export default CardTaskFinishedComp;
