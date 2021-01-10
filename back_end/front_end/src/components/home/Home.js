import React from "react";
import camera from "./../../images/camera.svg";
import can from "./../../images/can.svg";
import map from "./../../images/map.svg";
import settings from "./../../images/settings.svg";
import { IconButton } from "@material-ui/core";

const home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <IconButton
            color="primary"
            aria-label="camera view"
            href="http://localhost:8888/"
          >
            <img src={camera} className="App-logo" alt="camera" />
          </IconButton>
          <IconButton color="primary" aria-label="can view" href="/CAN">
            <img src={can} className="App-logo" alt="can" />
          </IconButton>
          <IconButton color="primary" aria-label="map view" href="/map">
            <img src={map} className="App-logo" alt="map" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="settings view"
            href="/settings"
          >
            <img src={settings} className="App-logo" alt="settings" />
          </IconButton>
        </div>
        <div>
          Icons from{" "}
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
