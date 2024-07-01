import React from "react";
import "../../css//cardStyle/CardDeleteConfirmation.css";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx"; 

/**
 * Component for confirming the deletion of a project.
 *
 * @component
 * @example
 * const handleConfirm = () => {};
 * const handleCancel = () => {};
 * return <DeleteConfirmation onConfirm={handleConfirm} onCancel={handleCancel} />;
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.onConfirm - Function to call when confirming the deletion.
 * @param {Function} props.onCancel - Function to call when canceling the deletion.
 */

const DeleteConfirmation = ({ onConfirm, onCancel }) => {

  const { isDarkTheme} = useTheme();

  return (
    <div className="modal-backgraundDelete">
      <div className={`delete-confirmation ${isDarkTheme ? 'dark' : 'light'}`}>
        <h2>Are you sure you want to delete this project?</h2>
        <p>*All Sectors will be excluded</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
