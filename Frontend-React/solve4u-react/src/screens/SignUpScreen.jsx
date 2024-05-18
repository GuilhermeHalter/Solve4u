import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin, FaBookmark } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../css/screenStyle/signScreen/SignUpScreen.css";

const SignIn = () => {
    return (
        <div className="global">
            <div className="signUpBackButtonComp">     
            <Link to={"/"} className="signUpBackButton"><FaArrowLeftLong className="arrowBack"/> BACK </Link>
            </div>
            <div className="signUpContainer">
                <div className="manageJobComp">
                    <FaBookmark className="bookMarkIcon"/>
                    <h1 className="cardTitle">WELCOME</h1>
                    <p className="contentText"> We're here to streamline the way you manage your projects, offering powerful and intuitive tools to boost your productivity and achieve exceptional results.</p>
                     
                </div>
                <div className="loginComp">
                    <h1 className="loginTitle">LOGIN</h1>
                    <form className="inputSignIn">
                        <input type="text" className="nameInput" placeholder="Name" required />
                        <input type="text" className="passwordInput" placeholder="Password" required/>
                    </form>

                    <div className="signInButtonComp">
                        <Link to={"/newproject"} className="loginButton"> LOGIN </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
