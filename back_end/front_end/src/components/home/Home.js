import React from "react";
import camera from "./../../images/camera.svg";
import react from "./../../images/react.svg";
import { IconButton } from "@material-ui/core";

const home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={react} className="App-logo" alt="react" />
        <p>{Date().toLocaleString()}</p>
        <div>
          <IconButton color="primary" aria-label="camera view" href="/camera">
            <img src={camera} className="Camera-logo" alt="camera" />
          </IconButton>
        </div>
        <div>
          Icon from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </header>
    </div>
  );
};

export default home;
