import React from "react";
import "../../css//cardStyle/CardDeleteConfirmation.css";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-backgraundDelete">
         <div className="delete-confirmation">
            <h2>Tem certeza que deseja excluir esse projeto?</h2>
            <p>*Todos os Sectors serão excluidos</p>
            <div className="button-container">
                <button className="confirm-button" onClick={onConfirm}>Confirmar</button>
                <button className="cancel-button" onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    </div>
   
  );
};

export default DeleteConfirmation;
