// CardEditTaskComp.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../../../css/cardStyle/CardEditTaskComp.css";

/**
 * Component for editing an existing task.
 *
 * @component
 * @example
 * const task = {
 *   taskId: 1,
 *   taskName: "Sample Task",
 *   taskDescription: "This is a sample task",
 *   dateDeadline: "2024-12-31",
 *   taskUser: "John Doe"
 * };
 * const handleClose = () => {};
 * return <CardEditTaskComp task={task} onClose={handleClose} />;
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.task - The task to edit.
 * @param {Function} props.onClose - Function to call when closing the edit form.
 */

const CardEditTaskComp = ({ task, onClose }) => {
  const [taskName, setTaskName] = useState(task.taskName);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [dateDeadline, setDateDeadline] = useState(task.dateDeadline);
  const [taskUser, setTaskUser] = useState(task.taskUser);

  /**
   * Handle editing the task and saving changes to localStorage.
   */
  const handleEditTask = (event) => {
    event.preventDefault();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((item) => {
      if (item.taskId === task.taskId) {
        return {
          ...item,
          taskName: taskName,
          taskDescription: taskDescription,
          dateDeadline: dateDeadline,
          taskUser: taskUser,
        };
      }
      return item;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    onClose();
    window.location.reload();
  };

  /**
   * Handle input changes for task fields.
   *
   * @param {Object} event - The input change event.
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

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Edit Task</h2>
        <form onSubmit={handleEditTask}>
          <input
            type="text"
            className="taskInput"
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
            className="taskInput"
            name="dateDeadline"
            value={dateDeadline}
            onChange={handleInputChange}
            required
          />
          <select
            name="taskUser"
            id="user"
            value={taskUser}
            onChange={handleInputChange}
            required
          >
            <option value="">Select User</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
          </select>
          <button type="submit" className="edit-btn">
            Edit Task <FaPlus className="iconCard" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardEditTaskComp;
