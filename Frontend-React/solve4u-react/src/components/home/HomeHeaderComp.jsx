import React from "react";
import "../../css/compStyle/compHomeStyle/HomeHeaderComp.css"
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
  }
};

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
        <label className="labelItem">
          <input className="searchInput" type="text" placeholder="Search" />
          <IoSearchOutline className="searchIcon" />
        </label>
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
