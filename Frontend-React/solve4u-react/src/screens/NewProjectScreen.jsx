import "../css/NewProject.css";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx"
import { FaArrowRight, FaPlus  } from "react-icons/fa";

import { useState } from 'react';

import CardCreateProject from "../components/cardsProjects/CardCreateProjectComp.jsx";
import CardJoinProject from "../components/cardsProjects/CardJoinProjectComp.jsx";

const NewProject = () => {

  const [isCardVisible, setCardVisible] = useState(false);
  const [isCardVisibleJ, setCardVisibleJ] = useState(false);

  const openCard = () => {
    setCardVisible(true);
  };

  const closeCard = () => {
    setCardVisible(false);
  };

  const openCardJ = () => {
    setCardVisibleJ(true);
  };

  const closeCardJ = () => {
    setCardVisibleJ(false);
  };

  return (
    <>
    <GlobalHeader />
      <div className="new-project-container">
        <h1>You don't have any projects yet. Create one!</h1>
        <Sidebar />
        <div className="cardsContainer">
          <div className="cardsRow">          
            <div className="joinProjectCard">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at dicta, delectus reiciendis vel pariatur. Eligendi labore magnam similique nobis eaque maxime cupiditate, numquam sint quibusdam iusto molestiae alias libero.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur nostrum nesciunt. Magnam enim pariatur repellendus aliquid voluptatem alias libero, consectetur illo labore dolorum amet harum deleniti id quod dolores?
              </p>
              <button className="cardButtonJoin" onClick={openCardJ}>Join Project <FaArrowRight className="icon" /></button>
            </div>
            <div className="createProjectCard">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at dicta, delectus reiciendis vel pariatur. Eligendi labore magnam similique nobis eaque maxime cupiditate, numquam sint quibusdam iusto molestiae alias libero.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur nostrum nesciunt. Magnam enim pariatur repellendus aliquid voluptatem alias libero, consectetur illo labore dolorum amet harum deleniti id quod dolores?
              </p>
              <button className="cardButtonCreate" onClick={openCard} >Create Project <FaPlus className="icon"/></button>

              {isCardVisibleJ && <CardJoinProject onClose={closeCardJ} />}
              {isCardVisible && <CardCreateProject onClose={closeCard} />}
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default NewProject;
