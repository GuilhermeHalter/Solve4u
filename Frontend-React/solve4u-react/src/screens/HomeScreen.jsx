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
    </div>
  );
}

export default Home;