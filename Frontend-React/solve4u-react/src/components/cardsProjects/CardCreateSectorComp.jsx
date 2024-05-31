import React, { useState } from "react";
import "../../css/cardStyle/CardCreateSectorComp.css";
import { FaPlus, FaTimes } from "react-icons/fa";

const CardCreateSector = ({ onClose, projectId }) => {
  const [sectorName, setSectorName] = useState("");
  const [sectorDescription, setSectorDescription] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sectorColor, setSectorColor] = useState("#ffffff");

  const users = ["User 1", "User 2", "User 3"];

  const handleCreateSector = () => {
    const sectors = JSON.parse(localStorage.getItem("sectors")) || [];
    const newSectorId = sectors.length > 0 ? sectors[sectors.length - 1].sectorId + 1 : 1;

    const sector = {
      projectId: projectId,
      sectorId: newSectorId,
      sectorName,
      sectorDescription,
      selectedUsers,
      sectorColor 
    };

    sectors.push(sector);
    localStorage.setItem("sectors", JSON.stringify(sectors));

    setSectorName("");
    setSectorDescription("");
    setSelectedUser("");
    setSelectedUsers([]);
    onClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "sectorName") {
      setSectorName(value);
    } else if (name === "sectorDescription") {
      setSectorDescription(value);
    }
  };

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAddUser = () => {
    if (selectedUser && !selectedUsers.includes(selectedUser)) {
      setSelectedUsers([...selectedUsers, selectedUser]);
      setSelectedUser("");
    }
  };

  const handleRemoveUser = (userToRemove) => {
    setSelectedUsers(selectedUsers.filter(user => user !== userToRemove));
  };

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
            <option value="" disabled>Select User</option>
            {users.map(user => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
          <button className="add-user-btn" onClick={handleAddUser}>
            Add User<FaPlus className="iconCard" />
          </button>
        </div>
        <div className="selected-users">
          {selectedUsers.map(user => (
            <div key={user} className="selected-user">
              {user}
              <button className="remove-user-btn" onClick={() => handleRemoveUser(user)}>
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
