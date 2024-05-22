import React from "react";
import "../../../css/cardStyle/CardTaskComp.css";

const TaskCard = ({ task }) => {
  const getTaskColor = () => {
    switch (task.taskStage) {
      case "1":
        return "#FFD700"; // Yellow
      case "2":
        return "#800080"; // Purple
      case "3":
        return "#008000"; // Green
      case "4":
        return "#FF0000"; // Red
      default:
        return "#000000"; // Black (default color)
    }
  };

  const taskColor = getTaskColor(); // Obter a cor da tarefa

  return (
    <div className="task-card" style={{ border: `2px solid ${taskColor}` }}>
       <div className="up" style={{ backgroundColor: getTaskColor() }}>

       </div>
       <div className="down">
            <h3>{task.taskName}</h3>
            <p>{task.taskDescription}</p>
            <p>Assigned User: {task.taskUser}</p>
       </div>
      
    </div>
  );
};

export default TaskCard;
