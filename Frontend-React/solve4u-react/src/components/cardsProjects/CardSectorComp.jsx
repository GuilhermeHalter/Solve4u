import React from "react";
import PropTypes from "prop-types";
import "../../css/cardStyle/CardSectorComp.css";

/**
 * Component for displaying a sector card.
 *
 * @component
 * @example
 * const sector = {
 *   sectorName: "Sector 1",
 *   sectorDescription: "This is a description",
 *   selectedUsers: ["User 1", "User 2"],
 *   sectorColor: "#ff0000"
 * };
 * const handleClick = (sector) => { console.log(sector); };
 * return <SectorCard sector={sector} onClick={handleClick} />;
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.sector - The sector object containing details.
 * @param {string} props.sector.sectorName - The name of the sector.
 * @param {string} props.sector.sectorDescription - The description of the sector.
 * @param {string[]} props.sector.selectedUsers - The users selected for the sector.
 * @param {string} props.sector.sectorColor - The color associated with the sector.
 * @param {Function} props.onClick - Function to call when the sector card is clicked.
 */

const SectorCard = ({ sector, onClick }) => {
  const { sectorName, sectorDescription, selectedUsers, sectorColor } = sector;

  return (
    <div className="sector-card" onClick={() => onClick(sector)}>
      <h3
        style={{
          backgroundColor: sectorColor,
          borderRadius: "5px",
          minWidth: "30%",
          maxWidth: "50%",
          textAlign: "center",
        }}
      >
        {sectorName}
      </h3>
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
    sectorColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SectorCard;
