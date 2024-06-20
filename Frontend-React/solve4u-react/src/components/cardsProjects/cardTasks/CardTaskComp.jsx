import React from "react";
import "../../../css/cardStyle/cardTasks/CardTaskComp.css";

/**
 * Component to display a task card based on the stage of the task.
 *
 * @component
 * @example
 * const task = { taskId: 1, taskName: "Task 1", taskDescription: "Description", taskStage: "1" };
 * return <TaskCard task={task} />;
 * 
 * @param {Object} props - The properties of the component.
 * @param {Object} props.task - The task to display on the card.
 */

const TaskCard = ({ task }) => {
   /**
   * Returns the color corresponding to the stage of the task.
   * @returns {string} The color of the card based on the stage of the task.
   */
  const getTaskColor = () => {
    switch (task.taskStage) {
      case "1":
        return "#FFD700"; // Yellow for Process
      case "2":
        return "#800080"; // Purple for Checking
      case "3":
        return "#008000"; // Green for Finished
      case "4":
        return "#FF0000"; // Red for Pending
      default:
        return "#000000";
    }
  };

  const taskColor = getTaskColor();

  return (
    <div className="task-card" style={{ border: `2px solid ${taskColor}` }}>
      <div className="up" style={{ backgroundColor: getTaskColor() }}></div>
      <div className="down">
        <h3 className="titleTask">{task.taskName}</h3>
        <p className="descriptionTask">{task.taskDescription}</p>
      </div>
    </div>
  );
};

export default TaskCard;
