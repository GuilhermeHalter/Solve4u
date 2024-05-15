import React from "react";
import HomeHeader from "../components/home/HomeHeaderComp";
import HomeFooter from "../components/home/HomeFooterComp";
import "../css/screenStyle/homeScreenStyle/HomeScreen.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <HomeHeader />
        <div className="welcomeText">
          <h1>Welcome to</h1>
          <h2>Solve<div className="four">4</div>u</h2>
          <p>We're here to streamline the way you manage your projects, offering  powerful and intuitive tools to boost your productivity and achieve  exceptional results. Our commitment is to provide a platform that not  only organizes your tasks but also inspires collaboration, creativity,  and innovation at every stage of your project.</p>
        </div>
      </div>
      <div className="section2" id="solutions">
        <div className="section2DivImg">
          <img className="section2Img" src="https://www.doplim.com.br/noticias/wp-content/uploads/2024/02/relacoes-interpessoais-no-trabalho-administrativo-no-brasil-900x500.jpg" alt="Solution" />
        </div>
        <div className="section2Text">
          <h1 className="solutionsTitle">
            We solve your
            <br /> challenge for you.
          </h1>
          <p>
            Regardless of the size or complexity of your project, we are committed to delivering exceptional results that add tangible value to your business. When you choose our solutions, you are choosing partnership, innovation and excellence, guided by an unwavering commitment to your success.
          </p>
        </div>
      </div>
      <div className="section3" id="performance">
        <div className="section3DivText">
          <h1 className="performanceTitle">
            Unlock the potential
            <br /> of your projects.
          </h1>
          <p>
            Our platform is a powerful and intuitive tool designed to simplify project management and boost your productivity. With features that go beyond simply organizing tasks, we are committed to providing a solution that inspires collaboration, creativity and innovation at every stage of your project.
          </p>
        </div>
        <div className="section3DivImg">
          <img className="section3Img" src="https://img.freepik.com/premium-vector/set-colorful-infographic-elements-presentation-graphics-statistics-data-diagrams_172533-81.jpg" alt="Performance" />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
