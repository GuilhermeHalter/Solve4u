import HomeHeader from "../components/home/HomeHeaderComp"
import "../css/HomeScreen.css";

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
    <div className="section2">
      <div className="section2DivImg">
        <img className="section2Img" src="https://www.doplim.com.br/noticias/wp-content/uploads/2024/02/relacoes-interpessoais-no-trabalho-administrativo-no-brasil-900x500.jpg" />
      </div>
      <div className="section2Text">
          <h1>
            
          </h1>
      </div>
    </div>
    <div className="section3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur saepe qui nihil temporibus omnis itaque iste tenetur incidunt voluptatibus expedita accusamus commodi quam maiores culpa recusandae, earum quia voluptate.
    </div>
    </div>
  );
}

export default Home;