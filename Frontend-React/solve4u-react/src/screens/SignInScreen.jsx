import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../css/screenStyle/signScreen/SignInScreen.css";

const SignIn = () => {
    return (
        <div className="global">
            <div className="signInBackButtonComp">     
            <Link to={"/"} className="signInBackButton"><FaArrowLeftLong className="arrowBack"/> BACK </Link>
            </div>
            <div className="signInContainer">
                <div className="welcomeComp">
                    <h1 className="welcomeTitle">WELCOME</h1>
                    <p className="textContent"> We're here to streamline the way you manage your projects, offering powerful and intuitive tools to boost your productivity and achieve exceptional results.</p>
                     
                     <div className="signUpButtonComp">
                        <Link to={"/signup"} className="signUpButton"> SIGN UP </Link>
                     </div>
                     
                </div>
                <div className="loginComp">
                    <h1 className="loginTitle">LOGIN</h1>
                    <div className="inputSignIn">
                        <input type="text" className="nameInput" placeholder="Name" />
                        <input type="text" className="passwordInput" placeholder="Password" />
                    </div>

                    <div className="signInButtonComp">
                        <Link to={"/newproject"} className="singInButton"> SIGN IN </Link>
                    </div>
                    <div className="iconsLogin">
                        <ul>
                            <li><a target="_blank"><FcGoogle className="googleIcon" /></a></li>
                            <li><a target="_blank"><FaGithub className="githubIcon" /></a></li>
                            <li><a target="_blank"><FaLinkedin className="linkedinIcon" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
