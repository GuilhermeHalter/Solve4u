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
        Solve<span className="four">4</span>u
      </h1>
    </nav>
  );
};

export default GlobalHeader;
