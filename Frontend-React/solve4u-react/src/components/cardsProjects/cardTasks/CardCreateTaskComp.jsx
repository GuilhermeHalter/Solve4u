import React, { useState } from "react";
import "../../../css/cardStyle/CardCreateTaskComp.css";
import { FaPlus } from "react-icons/fa";

/**
 * Component to create a new task.
 *
 * @component
 * @example
 * const sectorId = 1;
 * const handleClose = () => {};
 * return <CardCreateTask onClose={handleClose} sectorId={sectorId} />;
 * 
 * @param {Object} props - The properties of the component.
 * @param {Function} props.onClose - Function to close the modal.
 * @param {number} props.sectorId - The ID of the sector where the task will be created.
 */

const CardCreateTask = ({ onClose, sectorId }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskUser, setTaskUser] = useState("");
  const [dateDeadline, setDateDeadline] = useState("");

  const users = ["User 1", "User 2", "User 3"];

  /**
   * Creates a new task and adds it to localStorage.
   */
  const handleCreateTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1;
    const today = new Date().toISOString().split("T")[0];

    const task = {
      sectorId: sectorId,
      taskId: newTaskId,
      taskName,
      taskDescription,
      taskUser,
      dateDeadline,
      taskStage: "1",
      startDate: today,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    setTaskName("");
    setTaskDescription("");
    setTaskUser("");
    setDateDeadline("");
    onClose();
  };

  /**
   * Handles form submission.
   * Checks if required fields are filled before creating the task.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskName || !taskDescription || !taskUser || !dateDeadline) {
      alert("Please fill in all required fields.");
      return;
    }

    handleCreateTask();
  };

  /**
   * Updates the input state as the user types.
   * @param {Object} event - The input event.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "taskDescription") {
      setTaskDescription(value);
    } else if (name === "dateDeadline") {
      setDateDeadline(value);
    } else if (name === "taskUser") {
      setTaskUser(value);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="sectorInput"
            placeholder="Task Name"
            name="taskName"
            value={taskName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Task Description"
            className="description"
            name="taskDescription"
            value={taskDescription}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            placeholder="Deadline"
            className="dateInput"
            name="dateDeadline"
            value={dateDeadline}
            onChange={handleInputChange}
            min={today}
            required
          />
          <div className="user-select-container">
            <select
              value={taskUser}
              onChange={handleInputChange}
              className="user-select"
              name="taskUser"
              required
            >
              <option value="" disabled>
                Select User
              </option>
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="create-btn">
            Create Task <FaPlus className="iconCard" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardCreateTask;
