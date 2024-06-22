import React from "react";
import "../../css/compStyle/compHomeStyle/HomeHeaderComp.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

/**
 * Makes a slight scrool down the page
 */

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Component for displaying the header of the home page.
 *
 * This component displays a navigation menu with links to different sections of the page,
 * such as Solutions and Performance, and also buttons for signing in and signing up.
 *
 * @component
 * @example
 * return <HomeHeader />;
 */

const HomeHeader = () => {
  return (
    <nav className="homeHeaderNav">
      <div className="discoveryComp">
        <ul className="discoveryCompUl">
        <li className="solutionsli" onClick={() => scrollToSection("solutions")}>
            Solutions <IoIosArrowDown />
          </li>
          <li className="performanceLi" onClick={() => scrollToSection("performance")}>
            Performance <IoIosArrowDown />
          </li>
        </ul>
      </div>
      <ul className="headerRightComps">
        <li className="signInHomeButton">
          <Link to={"/signin"} className="Aheader">
            Sign In
          </Link>
        </li>
        <li className="signUpHomeButton">
          <Link to={"/signup"} className="Aheader">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeHeader;
