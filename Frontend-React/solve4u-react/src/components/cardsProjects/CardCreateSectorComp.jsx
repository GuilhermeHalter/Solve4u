import React, { useState } from "react";
import "../../css/cardStyle/CardCreateSectorComp.css";
import { FaPlus, FaTimes } from "react-icons/fa";

/**
 * Component for creating a new sector.
 *
 * @component
 * @example
 * const projectId = 1;
 * const handleClose = () => {};
 * return <CardCreateSector onClose={handleClose} projectId={projectId} />;
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.onClose - Function to close the modal.
 * @param {number} props.projectId - The ID of the project to which the sector will be associated.
 */

const CardCreateSector = ({ onClose, projectId }) => {
  const [sectorName, setSectorName] = useState("");
  const [sectorDescription, setSectorDescription] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sectorColor, setSectorColor] = useState("#ffffff");

  const users = ["User 1", "User 2", "User 3"];

  /**
   * Creates a new sector and adds it to localStorage.
   */

  const handleCreateSector = () => {
    const sectors = JSON.parse(localStorage.getItem("sectors")) || [];
    const newSectorId =
      sectors.length > 0 ? sectors[sectors.length - 1].sectorId + 1 : 1;

    const sector = {
      projectId: projectId,
      sectorId: newSectorId,
      sectorName,
      sectorDescription,
      selectedUsers,
      sectorColor,
    };

    sectors.push(sector);
    localStorage.setItem("sectors", JSON.stringify(sectors));

    setSectorName("");
    setSectorDescription("");
    setSelectedUser("");
    setSelectedUsers([]);
    onClose();
  };

   /**
   * Updates the input state as the user types.
   * @param {Object} event - The input event.
   */

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "sectorName") {
      setSectorName(value);
    } else if (name === "sectorDescription") {
      setSectorDescription(value);
    }
  };

 /**
   * Updates the selected user state.
   * @param {Object} event - The select event.
   */

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  /**
   * Adds the selected user to the sector's user list.
   */

  const handleAddUser = () => {
    if (selectedUser && !selectedUsers.includes(selectedUser)) {
      setSelectedUsers([...selectedUsers, selectedUser]);
      setSelectedUser("");
    }
  };

/**
   * Removes a user from the sector's user list.
   * @param {string} userToRemove - The user to remove.
   */

  const handleRemoveUser = (userToRemove) => {
    setSelectedUsers(selectedUsers.filter((user) => user !== userToRemove));
  };

 /**
   * Updates the sector color as selected by the user.
   * @param {Object} event - The color change event.
   */

  const handleColorChange = (event) => {
    setSectorColor(event.target.value);
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Create New Sector</h2>
        <div className="color-picker-container">
          <input
            type="text"
            className="sectorInput"
            placeholder="Sector Name"
            name="sectorName"
            value={sectorName}
            onChange={handleInputChange}
            required
          />

          <input
            type="color"
            className="color-picker"
            value={sectorColor}
            onChange={handleColorChange}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Sector Description"
          className="description"
          name="sectorDescription"
          value={sectorDescription}
          onChange={handleInputChange}
          required
        />
        <div className="user-select-container">
          <select
            value={selectedUser}
            onChange={handleUserSelect}
            className="user-select"
            required
          >
            <option value="" disabled>
              Select User
            </option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button className="add-user-btn" onClick={handleAddUser}>
            Add User
            <FaPlus className="iconCard" />
          </button>
        </div>
        <div className="selected-users">
          {selectedUsers.map((user) => (
            <div key={user} className="selected-user">
              {user}
              <button
                className="remove-user-btn"
                onClick={() => handleRemoveUser(user)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
        <button className="create-btn" onClick={handleCreateSector}>
          Create Sector <FaPlus className="iconCard" />
        </button>
      </div>
    </div>
  );
};

export default CardCreateSector;
