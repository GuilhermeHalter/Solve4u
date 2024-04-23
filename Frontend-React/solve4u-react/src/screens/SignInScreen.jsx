import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div>
                <h1>WELCOME</h1>
                <div className="welcomeText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus magnam temporibus, cupiditate quisquam repellat distinctio qui commodi unde esse, expedita, non voluptatibus. Animi, quo hic molestiae perferendis ex incidunt accusamus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod voluptatum harum, perferendis natus ad delectus iure tenetur quibusdam nihil autem recusandae molestiae at explicabo vitae earum soluta culpa. Officiis?
                </div>
                <Link to={"/signup"}> SIGN UP </Link>
            </div>
            <div className="login">
                <h1>LOGIN</h1>
                <div className="inputSignIn">
                    <input type="text" className="name" placeholder="Name" />
                    <input type="text" className="password" placeholder="Password" />
                </div>
                <Link to={"/newproject"}> SIGN IN </Link>
              
                <div className="iconsLogin">

                </div>
            </div>
        </div>
    );

}

export default SignIn;