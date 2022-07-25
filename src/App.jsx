import "./App.css";
import "./index.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
function App() {
  return (
    <div className="container">
      <div className="wheater-text">
        <input
          className="wheater-input"
          placeholder="Add one city..."
          type="text"
        />
        <button className="wheater-add">
          <FontAwesomeIcon className="wheater-add-button-icon" icon={faPlus} />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default App;
