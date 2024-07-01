import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { ThemeProvider, useTheme } from './assets/JavaScript/ThemeContext';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);

  return (
    <div className="containerApp">
      {loading ? (
        <div className="spinnerContainer">
          <InfinitySpin
            visible={true}
            width="200"
            color="#0076e2"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
