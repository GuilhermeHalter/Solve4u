import React from "react";
import PropTypes from "prop-types";
import "../../css/CardSectorComp.css"

const SectorCard = ({ sector }) => {
  const { sectorName, sectorDescription, selectedUsers } = sector;

  return (
    <div className="sector-card">
      <h3>{sectorName}</h3>
      <p>Description: {sectorDescription}</p>
      <p>Selected Users: {selectedUsers.join(", ")}</p>
    </div>
  );
};

SectorCard.propTypes = {
  sector: PropTypes.shape({
    sectorName: PropTypes.string.isRequired,
    sectorDescription: PropTypes.string.isRequired,
    selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default SectorCard;
