import "../../css/HomeHeaderComp.css"
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const HomeHeader = () => {
    return (
        <nav className="navbar">
        <ul>
          <form className="formItem">
            <input type="text" 
            placeholder="Busque aqui" 
            />
            <button type="submit">
            <IoSearchOutline />
            </button>
          </form>
          
          <li>
          <Link to={"/signup"} className="Aheader">Sign Up</Link>
          </li>
          <li>
          <Link to={"/signin"} className="Aheader">Sign In</Link>
          </li>
          
        </ul>
      </nav>
      )
  }
  
  export default HomeHeader;