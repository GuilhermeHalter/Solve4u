import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

export default App;
