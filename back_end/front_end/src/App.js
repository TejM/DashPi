import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Camera from "./components/camera/Camera";
import Can from "./components/can/Can";
import Settings from "./components/settings/Settings";
import Error from "./components/error/Error";
import Navigation from "./components/navigation/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/camera" component={Camera} />
            <Route path="/CAN" component={Can} />
            <Route path="/settings" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
