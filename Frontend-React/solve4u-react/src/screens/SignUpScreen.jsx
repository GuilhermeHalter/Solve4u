import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div>
                <h1>MANAGE YOUR JOB</h1>
                <div className="manageJobText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus magnam temporibus, cupiditate quisquam repellat distinctio qui commodi unde esse, expedita, non voluptatibus. Animi, quo hic molestiae perferendis ex incidunt accusamus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod voluptatum harum, perferendis natus ad delectus iure tenetur quibusdam nihil autem recusandae molestiae at explicabo vitae earum soluta culpa. Officiis?
                </div>
            </div>
            <div className="login">
                <h1>LOGIN</h1>  
                <div className="inputSignUp">
                    <input type="text" className="email" placeholder="E-mail" />
                    <input type="text" className="password" placeholder="Password" />
                </div>
                <Link to={"/newproject"}> LOGIN </Link>
                </div>
            </div>
    );


}

export default SignUp; 