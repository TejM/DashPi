import React from "react";
import home from "./../../images/home.svg";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "./Navigation.css";

const Navigation = () => {
  let history = useHistory();
  return (
    <div>
      <IconButton color="primary" aria-label="home view" href="/">
        <img src={home} className="App-logo" alt="home" />
      </IconButton>
      <button class="button back-button" onClick={() => history.goBack()}>
        Back
      </button>
      <button class="button forward-button" onClick={() => history.goForward()}>
        Forward
      </button>
    </div>
  );
};

export default Navigation;
