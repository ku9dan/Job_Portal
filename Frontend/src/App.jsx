import React from "react";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";
import { JobsPage } from "./components/JobsPage";


function App() {
  return (
    <div className="jobportal-container">
      <div className="cities">
        <Cities />
      </div>
      <div className="hiring-steps">
        <HiringSteps />
      </div>
      <div className="Jobpage">
        <JobsPage />
      </div>
      
    </div>
  );
}

export default App;
