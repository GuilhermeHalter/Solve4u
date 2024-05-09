import "../css/NewProject.css";
import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx"
import { FaArrowRight, FaPlus } from "react-icons/fa";

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
        <h1>You don't have
          <br /> any project create one!!</h1>
        <Sidebar />
        <div className="cardsContainer">
          <div className="cardsRow">
            <div className="joinProjectCard">
              <p>
                If you were invited to a project, you can access it directly here through a code generated and shared by the owner of that project.
                <br /> <br />
                Did not work?
                <br />
                 If you haven't received any code, there are some possibilities for this:
                <br /> <br />
                Check your email inbox or check if the project invitation code has not expired or even if the project is still ongoing.
              </p>
              <button className="cardButtonJoin" onClick={openCardJ}>Join Project <FaArrowRight className="icon" /></button>
            </div>
            <div className="createProjectCard">
              <p>
              This field is perfect if you want to create a project to manage tasks, track project development and organize your team in a simple, fast and efficient way. 
              <br /> <br />
              Did you like it?
               <br /> 
Our platform has a comfortable interface, several organization options to choose from, speed and proficiency for your team to leverage your project, as well as everything needed to Solve4u.
              </p>
              <button className="cardButtonCreate" onClick={openCard} >Create Project <FaPlus className="icon" /></button>

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
