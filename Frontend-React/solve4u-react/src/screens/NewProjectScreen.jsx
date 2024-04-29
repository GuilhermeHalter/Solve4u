// NewProjectScreen.jsx
import "../css/NewProject.css";
import Sidebar from "../components/global/SidebarComp.jsx";
import { FaArrowRight, FaPlus  } from "react-icons/fa";


const NewProject = () => {
  return (
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
            <button className="cardButtonJoin">Join Project <FaArrowRight /></button>
          </div>
          <div className="createProjectCard">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at dicta, delectus reiciendis vel pariatur. Eligendi labore magnam similique nobis eaque maxime cupiditate, numquam sint quibusdam iusto molestiae alias libero.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur nostrum nesciunt. Magnam enim pariatur repellendus aliquid voluptatem alias libero, consectetur illo labore dolorum amet harum deleniti id quod dolores?
            </p>
            <button className="cardButtonCreate">Create Project <FaPlus /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
