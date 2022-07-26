import React from "react";
import "./Wheather.css";

function Wheather({ date, mintemp, maxtemp, condition, icon }) {
  return (
    <div className="list-container">
      <div className="lists">
        <div className="date">{date}</div>
        <div>
          <img src={icon} alt="is the tag that specifies the icons" />
        </div>
        <div>{condition}</div>
        <div>
          {mintemp} C / {maxtemp} C
        </div>
      </div>
    </div>
  );
}

export default Wheather;
