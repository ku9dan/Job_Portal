import React from "react";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";

function App() {
  return (
    <div className="jobportal-container">
      <div className="cities">
        <Cities />
      </div>
      <div className="hiring-steps">
        <HiringSteps />
      </div>
    </div>
  );
}

export default App;
