import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../css/screenStyle/signScreen/SignUpScreen.css";

const SignIn = () => {
    return (
        <div className="global">
            <div className="signUpBackButtonComp">     
            <Link to={"/signin"} className="signUpBackButton"><FaArrowLeftLong className="signUpArrowBack"/> BACK </Link>
            </div>
            <div className="signUpContainer">
                <div className="manageJobComp">
                    <h1 className="cardTitle">MANAGE YOUR JOB</h1>
                    <p className="contentText"> We're here to streamline the way you manage your projects, offering powerful and intuitive tools to boost your productivity and achieve exceptional results.</p>
                     
                </div>
                <div className="signUpComp">
                <FaBookmark className="markBookIcon"/>
                    <h1 className="signUpTitle">SIGN UP</h1>
                    <form className="inputSignUp">
                        <input type="text" className="newNameInput" placeholder="Name" required />
                        <input type="email" className="newEmailInput" placeholder="E-mail" required/>
                        <input type="password" className="newPasswordInput" placeholder="Password" required/>
                        <input type="password" className="confirmPasswordInput" placeholder="Confirm Password" required/>
                    </form>

                    <div className="loginButtonComp">
                        <Link to={"/signin"} className="loginButton"> LOGIN </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
