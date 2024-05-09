import React from "react";
import SectorCard from "../cardsProjects/CardSectorComp";

const CardsSectorByProjectId = ({ projectId }) => {
  const sectors = JSON.parse(localStorage.getItem("sectors")) || [];
  
  const filteredSectors = sectors.filter(sector => sector.projectId === projectId);

  return (
    <div>
      <h2>Sectors for Project {projectId}</h2>
      {filteredSectors.map(sector => (
        <SectorCard key={sector.id} sector={sector} />
      ))}
    </div>
  );
};

export default CardsSectorByProjectId;
