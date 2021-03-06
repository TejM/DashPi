import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Can from "./components/can/Can";
import Map from "./components/map/Map";
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
            <Route path="/CAN" component={Can} />
            <Route path="/Map" component={Map} />
            <Route path="/settings" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
