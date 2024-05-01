import "../../css/HomeHeaderComp.css"
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const HomeHeader = () => {
    return (
        <nav className="homeHeaderNav">
           <div className="discoveryComp">
            <ul>
              <li className="solutionsli">Solutions
            <IoIosArrowDown/></li>
              <li className="openSourceLi">Open Source
            <IoIosArrowDown /></li>
              <li className="pricingLi">Pricing
            <IoIosArrowDown /></li>
            </ul>
          </div>
        <ul className="headerRightComps">
          <label className="labelItem">
            <input type="text" 
            placeholder="Search" 
            />
            <IoSearchOutline  className="searchIcon"/>
          </label>

           <li className="signInButton">
          <Link to={"/signin"} className="Aheader">Sign In</Link>
          </li>
          <li className="signUpButton">
          <Link to={"/signup"} className="Aheader">Sign Up</Link>
          </li>
        </ul>
      </nav>
      )
  }
  
  export default HomeHeader;
