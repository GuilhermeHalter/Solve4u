import React, { useState } from "react";
import "../../css/cardStyle/CardCreateProjectComp.css";
import { FaPlus } from "react-icons/fa";

const CardCreateProject = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("Option 1");

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleCreateProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const lastId = projects.length > 0 ? projects[projects.length - 1].id : 0;
    const newProject = {
      id: lastId + 1,
      codigo: generateRandomCode(),
      projectName,
      projectDescription,
      category
    };

    projects.push(newProject);
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
          required
        />
        <input
          type="text"
          placeholder="Project Description"
          className="description"
          name="projectDescription"
          value={projectDescription}
          onChange={handleInputChange}
          required
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleInputChange}
          required
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <button className="create-btn" onClick={handleCreateProject} >
          Create Project <FaPlus className="iconCard" />
        </button>
      </div>
    </div>
  );
};

export default CardCreateProject;
