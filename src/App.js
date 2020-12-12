import React from "react";
import Provider from "./store/provider";
import MissionDetails from "./components/MissionDetails";
import DeveloperDetails from "./components/DeveloperDetails";

function App() {
  return (
    <div>
        <Provider>
            <MissionDetails/>
            <DeveloperDetails/>
        </Provider>
    </div>
  );
}

export default App;
