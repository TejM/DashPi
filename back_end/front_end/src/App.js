import React from 'react';
import camera from './camera.svg';
import react from './react.svg';
import { IconButton } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={react} className="App-logo" alt="react" />
        <div>
          <IconButton color="primary" aria-label="camera view">
            <img src={camera} className="Camera-logo" alt="camera" />           
          </IconButton>
        </div>
        <div>
          Icon from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div> 
      </header>
    </div>
  );
}

export default App;
