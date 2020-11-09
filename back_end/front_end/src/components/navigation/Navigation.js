import React from "react";
import Clock from "react-live-clock";
import home from "./../../images/home.svg";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "./Navigation.css";

const Navigation = () => {
  let history = useHistory();
  return (
    <div class="navigation">
      <IconButton color="primary" aria-label="home view" href="/">
        <img src={home} className="Home-logo" alt="home" />
      </IconButton>
      <button class="button back-button" onClick={() => history.goBack()}>
        Back
      </button>
      <button class="button forward-button" onClick={() => history.goForward()}>
        Forward
      </button>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
    </div>
  );
};

export default Navigation;
