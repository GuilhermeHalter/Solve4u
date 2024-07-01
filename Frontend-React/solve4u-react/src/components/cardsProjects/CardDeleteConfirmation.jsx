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
        <h2>Tem certeza que deseja excluir esse projeto?</h2>
        <p>*Todos os Sectors serão excluidos</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
