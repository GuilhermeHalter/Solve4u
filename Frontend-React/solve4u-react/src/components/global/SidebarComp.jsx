import { useState } from "react";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder, FaRegMoon } from "react-icons/fa";
import { BiLogOut, BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../css/compStyle/compGlobalStyle/SidebarComp.css";

/**
 * Sidebar component for navigation and settings.
 *
 * @component
 * @example
 * return <Sidebar />;
 */

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <VscLayoutSidebarRight />
      </div>
      <div className="sidebarmain">
        <ul>
          <Link to={"/inbox"} className="Aheaders">
            <div className="bell">
              <li>Notifications</li>
              <BiBell />
            </div>
          </Link>
          <Link to={"/projects"} className="Aheaders">
            <div className="folder">
              <li>Projects</li>
              <FaRegFolder />
            </div>
          </Link>
          <Link to={"/config"} className="Aheaders">
            <div className="config">
              <li>Settings</li> <IoSettingsOutline />
            </div>
          </Link>
        </ul>
      </div>
      <div className="sidebarfooter">
        <hr />
        <ul>
          <Link to={"/"} className="Aheaders">
            <div className="logout">
              <li>Logout</li>
              <BiLogOut />
            </div>
          </Link>
          <div className="theme">
            <li>Theme</li>
            <FaRegMoon />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
