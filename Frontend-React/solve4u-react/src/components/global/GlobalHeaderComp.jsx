import "../../css/compStyle/compGlobalStyle/GlobalHeaderComp.css";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

/**
 * GlobalHeader component renders the top navigation bar of the application.
 *
 * @component
 * @example
 * return <GlobalHeader />;
 */

const GlobalHeader = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
       <span className="solve" translate="no" >Solve</span><span className="four" translate="no">4</span><span translate="no" className="u">u</span>
      </h1>
    </nav>
  );
};

export default GlobalHeader;
