import "./App.css";
import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wheather from "./Wheather.jsx";

function App() {
  const APP_KEY = "4976eeabaf7744af88980354222507";
  let cityinput = "";
  const [wheatherdata, setwheatherdata] = useState([]);
  function citytext() {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput);
    });
  }
  async function getdata(value) {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`
    );
    const result = await data.json();
    setwheatherdata(result.forecast.forecastday);
    console.log(result.forecast.forecastday);
  }
  return (
    <div className="container">
      <span className="created-name">Created by Fatih Kabay</span>
      <div className="title-text">
        <h2>Weather Forecast</h2>
        Which city would you like to know the weather forecast for?
      </div>
      <div className="wheater-text">
        <input
          className="wheater-input"
          placeholder="Search a city..."
          type="text"
          onChange={citytext}
        />
        <button className="wheater-add" onClick={() => getdata(cityinput)}>
          <FontAwesomeIcon
            className="wheater-add-button-icon"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
      <hr />
      {wheatherdata.map((item) => (
        <Wheather
          key={item.date}
          date={item.date}
          mintemp={item.day.mintemp_c}
          maxtemp={item.day.maxtemp_c}
          condition={item.day.condition.text}
          icon={item.day.condition.icon}
        />
      ))}
    </div>
  );
}

export default App;
