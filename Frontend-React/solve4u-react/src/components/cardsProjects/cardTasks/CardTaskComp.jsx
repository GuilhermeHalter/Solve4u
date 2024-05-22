import React from "react";
import "../../../css/cardStyle/CardTaskComp.css";

const TaskCard = ({ task }) => {
  const getTaskColor = () => {
    switch (task.taskStage) {
      case "1":
        return "#FFD700";
      case "2":
        return "#800080"; 
      case "3":
        return "#008000"; 
      case "4":
        return "#FF0000"; 
      default:
        return "#000000"; 
    }
  };

  const taskColor = getTaskColor(); 

  return (
    <div className="task-card" style={{ border: `2px solid ${taskColor}` }}>
       <div className="up" style={{ backgroundColor: getTaskColor() }}>

       </div>
       <div className="down">
            <h3 className="titleTask">{task.taskName}</h3>
            <p className="descriptionTask">{task.taskDescription}</p>
       </div>
      
    </div>
  );
};

export default TaskCard;
