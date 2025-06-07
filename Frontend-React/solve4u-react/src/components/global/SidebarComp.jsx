import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder, FaRegMoon } from "react-icons/fa";
import { BiLogOut, BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../css/compStyle/compGlobalStyle/SidebarComp.css";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx";
import { FiSun } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${isDarkTheme ? "dark" : "light"}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <h1 className="logo">
          {isOpen ? (
            <div className="logo-container">
              <span className="solve" translate="no">Solve</span>
              <span className="four" translate="no">4</span>
              <span className="u" translate="no">u</span>
            </div>
          ) : (
            <span className="solve-single" translate="no">S</span>
          )}
        </h1>
      </div>

      <div className="sidebarmain">
        <ul>
          <Link to={"/inbox"} className="Aheaders">
            <div className={`menu-item bell ${isDarkTheme ? "dark" : "light"}`}>
              {isOpen && <li>Notifications</li>}
              <BiBell className="icon" />
            </div>
          </Link>
          <Link to={"/projects"} className="Aheaders">
            <div className={`menu-item folder ${isDarkTheme ? "dark" : "light"}`}>
              {isOpen && <li>Projects</li>}
              <FaRegFolder className="icon" />
            </div>
          </Link>
          <Link to={"/config"} className="Aheaders">
            <div className={`menu-item config ${isDarkTheme ? "dark" : "light"}`}>
              {isOpen && <li>Settings</li>}
              <IoSettingsOutline className="icon" />
            </div>
          </Link>
        </ul>
      </div>

      <div className="sidebarfooter">
        {isOpen && <hr className="divider" />}
        <ul>
          <Link to={"/"} className="Aheaders">
            <div className={`menu-item logout ${isDarkTheme ? "dark" : "light"}`}>
              {isOpen && <li>Logout</li>}
              <BiLogOut className="icon" />
            </div>
          </Link>
          <div className="Aheaders">
            <div className={`menu-item theme ${isDarkTheme ? "dark" : "light"}`} onClick={toggleTheme}>
              {isOpen && <li>Theme</li>}
              {isDarkTheme ? <FiSun className="icon" /> : <FaRegMoon className="icon" />}
            </div>
          </div> 
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;