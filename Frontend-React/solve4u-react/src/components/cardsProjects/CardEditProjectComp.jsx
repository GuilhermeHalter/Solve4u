import React, { useState } from "react";
import "../../css/cardStyle/CardEditProjectComp.css";
import { FaPlus } from "react-icons/fa";

/**
 * Component for editing an existing project.
 *
 * @component
 * @example
 * const project = {
 *   id: 1,
 *   projectName: "Sample Project",
 *   projectDescription: "This is a sample project",
 *   category: "Option 1"
 * };
 * const handleClose = () => {};
 * return <CardEditProjectComp project={project} onClose={handleClose} />;
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.project - The project to edit.
 * @param {Function} props.onClose - Function to call when closing the edit form.
 */

const CardEditProjectComp = ({ project, onClose }) => {
  const [projectName, setProjectName] = useState(project.projectName);
  const [projectDescription, setProjectDescription] = useState(
    project.projectDescription
  );
  const [category, setCategory] = useState(project.category);

  /**
   * Handle editing the project and saving changes to localStorage.
   */
  const handleEditProject = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = projects.map((item) => {
      if (item.id === project.id) {
        return {
          ...item,
          projectName: projectName,
          projectDescription: projectDescription,
          category: category,
        };
      }
      return item;
    });
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    onClose();
  };

    /**
   * Handle input changes for project fields.
   *
   * @param {Object} event - The input change event.
   */

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
