import React from "react";
import "../../../../css/cardStyle/cardTasks/CardTaskProcessComp.css";

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
    <div className="modal-background-process">
      <div className="modal-process">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="lineVertical"> </div>
        <div className="modalContentLeft">
           <h2>{task.taskName}</h2>
           <p> {task.taskDescription}</p>
           <p>{task.taskUser}</p>
          
        </div>
           <hr className="modalDivision"/>
        <div className="modalContentRight">
            <div className="upRight">
                <p>Deadline: {task.dateDeadline}</p>

                <button >
                  Delete task  {/*fazer esse botao funcionar */}
                </button>
                <button className="move-task-btn" onClick={handleMoveTask}>
                  Move Task
                </button>
            </div>
            <hr />
            <div className="downRight">
                <button>Edit task</button> {/*fazer esse botao funcionar */}
            </div>
            
        </div>

      </div>
    </div>
  );
};

export default CardTaskProcessComp;
