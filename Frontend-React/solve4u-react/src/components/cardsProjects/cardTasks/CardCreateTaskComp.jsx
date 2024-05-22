import React, { useState } from "react";
import "../../../css/cardStyle/CardCreateTaskComp.css";
import { FaPlus } from "react-icons/fa";

const CardCreateTask = ({ onClose, sectorId }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUser, setTaskUser] = useState("");

  const users = ["User 1", "User 2", "User 3"];

  const handleCreateTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1;

    const task = {
      sectorId: sectorId, 
      taskId: newTaskId,
      taskName,
      taskDescription,
      taskUser,
      taskStage: "1", // Default to "Process"
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    setTaskName("");
    setTaskDescription("");
    setTaskUser("");
    onClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "taskDescription") {
      setTaskDescription(value);
    }
  };

  const handleUserSelect = (event) => {
    setTaskUser(event.target.value);
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Create New Task</h2>
        <input
          type="text"
          className="sectorInput"
          placeholder="Task Name"
          name="taskName"
          value={taskName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Task Description"
          className="description"
          name="taskDescription"
          value={taskDescription}
          onChange={handleInputChange}
        />
        <div className="user-select-container">
          <select
            value={taskUser}
            onChange={handleUserSelect}
            className="user-select"
          >
            <option value="" disabled>Select User</option>
            {users.map(user => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
        </div>
        <button className="create-btn" onClick={handleCreateTask}>
          Create Task <FaPlus className="iconCard" />
        </button>
      </div>
    </div>
  );
};

export default CardCreateTask;
