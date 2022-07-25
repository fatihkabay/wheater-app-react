import "./App.css";
import "./Wheather.jsx"
import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="container">
      <div className="title-text">
        <h2>Hava Durumu</h2>
        Which city would you like to know the weather forecast for?
      </div>
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
