import React from 'react';
import "../../css/CardsProjectComp.css"

const CardProject = ({ title, content }) => (
  <div className="card-comp">
    <h3>{title}</h3>
    <p>{content}</p>
    <div className="chart-placeholder">Gráfico</div>
  </div>
);

export default CardProject;
