import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/CAN">CAN</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
};

export default Navigation;
