import React from "react";
import "./containers/app.css";
import { NoiseButton } from "./components/NoiseButton";

function App() {
  return (
    <div id="drum-machine">
      <div className="buttons">
        <NoiseButton />
      </div>
    </div>
  );
}

export default App;
