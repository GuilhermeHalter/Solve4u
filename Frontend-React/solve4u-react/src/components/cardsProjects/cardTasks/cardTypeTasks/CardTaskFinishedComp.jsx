import React from "react";

import "../../../../css/cardStyle/cardTasks/CardTaskFinishedComp.css";

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
           <p> {task.taskDescription}</p>
           <p>{task.taskUser}</p>
          
        </div>
        <hr className="modalDivisionFinished"/>
        <div className="modalContentRightFinished">
        <div className="upRightFinished">
                <div className="dateTaks">
                  <p>Deadline: {task.startDate}</p>
                  <p>Deadline: {task.dateDeadline}</p>
                </div>
        </div>
        <hr className="horizontalDivisionFinished"/>
        <div className="downRightFinished"></div>

        </div>
      
      </div>
    </div>
  );
};

export default CardTaskFinishedComp;
