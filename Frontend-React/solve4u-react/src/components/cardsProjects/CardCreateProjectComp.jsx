import React, { useState } from "react";
import "../../css/CardCreateProjectComp.css";
import { FaPlus } from "react-icons/fa";

const CardCreateProject = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("Option 1");

  const handleCreateProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push({ projectName, projectDescription, category });

    localStorage.setItem("projects", JSON.stringify(projects));

    setProjectName("");
    setProjectDescription("");
    setCategory("Option 1");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "projectName") {
      setProjectName(value);
    } else if (name === "projectDescription") {
      setProjectDescription(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Create New Project</h2>
        <input
          type="text"
          className="projectInput"
          placeholder="Project Name"
          name="projectName"
          value={projectName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Project Description"
          className="description"
          name="projectDescription"
          value={projectDescription}
          onChange={handleInputChange}
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleInputChange}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <button className="create-btn" onClick={handleCreateProject}>
          Create Project <FaPlus className="iconCard" />
        </button>
      </div>
    </div>
  );
};

export default CardCreateProject;
