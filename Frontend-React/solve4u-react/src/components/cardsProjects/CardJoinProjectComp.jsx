import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../../css/CardJoinProjectComp.css";

const CardJoinProject = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Join a Project</h2>
        <input type="text" placeholder="Enter the Code" />
        <button className="create-btnJ">Join Project <FaArrowRight className="iconCardJ"/></button>
      </div>
    </div>
  );
};
export default CardJoinProject;
