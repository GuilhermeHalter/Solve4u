import React, { useState } from "react";
import "../../css/cardStyle/CardEditProjectComp.css";
import { FaPlus } from "react-icons/fa";

const CardEditProjectComp = ({ project, onClose }) => {
  const [projectName, setProjectName] = useState(project.projectName);
  const [projectDescription, setProjectDescription] = useState(project.projectDescription);
  const [category, setCategory] = useState(project.category);

  const handleEditProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = projects.map(item => {
      if (item.id === project.id) {
        return {
          ...item,
          projectName: projectName,
          projectDescription: projectDescription,
          category: category
        };
      }
      return item;
    });
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    onClose();
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
        <h2>Edit Project</h2>
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
        <button className="edit-btn" onClick={handleEditProject}>
          Edit Project <FaPlus className="iconCard" />
        </button>
      </div>
    </div>
  );
};

export default CardEditProjectComp;
