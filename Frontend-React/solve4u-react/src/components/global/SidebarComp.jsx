import { useState } from 'react';
import { VscLayoutSidebarRight} from 'react-icons/vsc';
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder, FaRegMoon  } from "react-icons/fa";
import { BiLogOut, BiBell  } from "react-icons/bi";



import '../../css/SidebarComp.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <VscLayoutSidebarRight />
      </div>
      <div className='sidebarmain'>
      <ul>
        <div className="bell"><li>Notifications</li><BiBell  /></div>
        <div className="folder"><li>Projects</li><FaRegFolder /></div>
        <div className='config'><li>Settings</li> <IoSettingsOutline /></div>
      </ul>
      </div>
      <div className="sidebarfooter">
        <hr />
        <ul>
          <div className="logout"><li>Logout</li><BiLogOut /></div>
          <div className="theme"><li>Theme</li><FaRegMoon /></div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
