import Sidebar from "../components/global/SidebarComp.jsx";
import GlobalHeader from "../components/global/GlobalHeaderComp.jsx";
import CardProject from "../components/cardsProjects/CardsProjectsComp.jsx";
import "../css/ProjectsScreen.css"

const Projects = () => {
  return (
    <div>
      <GlobalHeader />
      <Sidebar />
      <div className="project-screen">
        <header>
          <h1>Seus Projetos</h1>
        </header>
        <div className="projects-container">
          <CardProject
            title="Projeto ipsum 1"
            content="Lorem ipsum dolor sit amet consectetur."
          />
          <CardProject
            title="Projeto ipsum 2"
            content="Sed tortor quam iaculis ultrices."
          />
          <CardProject
            title="Projeto ipsum 3"
            content="Malesuada. Mollis purus magna phasellus."
          />
          <CardProject
            title="Projeto ipsum 3"
            content="Malesuada. Mollis purus magna phasellus."
          />
        </div>
        <section>
          <h2 className="subtitle">Análises</h2>
          <div className="analytics-container">
            <CardProject
              title="Projeto 1"
              content="Lorem ipsum dolor sit amet consectetur."
            />
            <CardProject
              title="Projeto 2"
              content="Sed tortor quam iaculis ultrices."
            />
            <CardProject
              title="Projeto 3"
              content="Malesuada. Mollis purus magna phasellus."
            />
            <CardProject
              title="Projeto 3"
              content="Malesuada. Mollis purus magna phasellus."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
