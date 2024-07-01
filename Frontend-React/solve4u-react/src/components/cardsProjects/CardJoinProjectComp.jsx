import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../../css/cardStyle/CardJoinProjectComp.css";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx"; 


/**
 * Component for joining an existing project using a code.
 *
 * @component
 * @example
 * const handleClose = () => {};
 * return <CardJoinProject onClose={handleClose} />;
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.onClose - Function to call when closing the join form.
 */

const CardJoinProject = ({ onClose }) => {
  const { isDarkTheme} = useTheme();
  return (
    <div className="modal-background">
      <div className={`modal ${isDarkTheme ? 'dark' : 'light'}`}>
        <button className={`close-btn ${isDarkTheme ? 'dark' : 'light'}`} onClick={onClose}>
          X
        </button>
        <h2>Join a Project</h2>
        <input
          type="text"
          className="projectInput"
          placeholder="Enter the Code"
          required
        />
        <button className={`create-btnJ ${isDarkTheme ? 'dark' : 'light'}`}>
          Join Project <FaArrowRight className="iconCardJ" />
        </button>
      </div>
    </div>
  );
};
export default CardJoinProject;
