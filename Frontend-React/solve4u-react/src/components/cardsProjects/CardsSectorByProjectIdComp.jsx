import React from "react";
import SectorCard from "../cardsProjects/CardSectorComp";

/**
 * Component for displaying a list of sectors filtered by project ID.
 *
 * @component
 * @example
 * const projectId = 1;
 * return <CardsSectorByProjectId projectId={projectId} />;
 *
 * @param {Object} props - Component properties.
 * @param {number} props.projectId - The ID of the project to filter sectors by.
 */

const CardsSectorByProjectId = ({ projectId }) => {
  const sectors = JSON.parse(localStorage.getItem("sectors")) || [];

  const filteredSectors = sectors.filter(
    (sector) => sector.projectId === projectId
  );

  return (
    <div>
      <h2>Sectors for Project {projectId}</h2>
      {filteredSectors.map((sector) => (
        <SectorCard key={sector.id} sector={sector} />
      ))}
    </div>
  );
};

export default CardsSectorByProjectId;
