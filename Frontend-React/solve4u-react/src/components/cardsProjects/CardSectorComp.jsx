import React from "react";
import PropTypes from "prop-types";
import "../../css/cardStyle/CardSectorComp.css";

const SectorCard = ({ sector }) => {
  const { sectorName, sectorDescription, selectedUsers, sectorColor } = sector;

  return (
    <div className="sector-card" >
      <h3 style={{ backgroundColor: sectorColor, borderRadius: "5px", minWidth: "30%", maxWidth: "50%" ,textAlign: "center" }}>{sectorName}</h3>
      <p>Description: {sectorDescription}</p>
      <p>Selected Users: {selectedUsers.join(", ")}</p>
    </div>
  );
};

SectorCard.propTypes = {
  sector: PropTypes.shape({
    sectorName: PropTypes.string.isRequired,
    sectorDescription: PropTypes.string.isRequired,
    selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
    sectorColor: PropTypes.string.isRequired
  }).isRequired
};

export default SectorCard;
