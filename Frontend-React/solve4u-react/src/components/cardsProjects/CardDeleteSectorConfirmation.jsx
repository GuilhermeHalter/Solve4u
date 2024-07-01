// CardDeleteSectorConfirmation.jsx
import React from "react";
import "../../css/cardStyle/CardDeleteSectorConfirmation.css";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx"; 

const CardDeleteSectorConfirmation = ({ onConfirm, onCancel }) => {
  const { isDarkTheme} = useTheme();

  return (
    <div className="modal-backgraundDelete">
      <div className={`delete-confirmation ${isDarkTheme ? 'dark' : 'light'}`}
      >
        <h2>Are you sure you want to delete this sector?</h2>
        <p>*This action will delete all tasks related to this sector.</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CardDeleteSectorConfirmation;
