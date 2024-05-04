import React from "react";
import "../../css/CardCreateProjectComp.css";
import { FaPlus } from "react-icons/fa";


const CardCreateProject = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Create New Project</h2>
        <input type="text" placeholder="Project Name" />
        <input type="text" placeholder="Project Description" className="description" />
        <select name="category" id="category">
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
        </select>
        <button className="create-btn">Create Project <FaPlus className="iconCard"/></button>
      </div>
    </div>
  );
};
export default CardCreateProject;
