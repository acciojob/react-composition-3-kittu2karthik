import React from "react";
import Tooltip from "./Tooltip";

import './../styles/App.css'

export function App(props) {
  return (
    <div className="App">
      <Tooltip text="This is an amazing feature!">
        <p>Hover over me</p>
      </Tooltip>

      <Tooltip text="I am a tooltip for this button">
        <button>Hover me too!</button>
      </Tooltip>

     
    </div>
  );
}