// Sidebar.jsx
import { useState } from 'react';
import { VscLayoutSidebarRight } from 'react-icons/vsc';
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
      <h2>Minha Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        {/* Adicione mais itens conforme necessário */}
      </ul>
    </div>
  );
}

export default Sidebar;
