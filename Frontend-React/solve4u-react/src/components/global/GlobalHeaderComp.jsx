import "../../css/compStyle/compGlobalStyle/GlobalHeaderComp.css";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx";

const GlobalHeader = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1 className="logo">
        <span className="solve-header" translate="no">Solve</span>
        <span className="four-header" translate="no">4</span>
        <span translate="no" className="u-header">u</span>
      </h1>
    </div>
  );
};

export default GlobalHeader;
