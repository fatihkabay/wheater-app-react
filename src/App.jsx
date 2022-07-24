import './App.css';
import './index.css';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {} from "react";
function App() {
  return (
    <div className='container'>
      
      <div className='header'>
         <div className='wheater-input'>
          <input className='wheater-input-text'placeholder='Add one city...' type="text" />
         </div>
         <div className='wheater-add'>
          <button className='wheater-add-button'><FontAwesomeIcon className="wheater-add-button-icon"
           icon={faPlus} /></button>
         </div>
      </div><hr/>
    </div>
  );
}

export default App;
