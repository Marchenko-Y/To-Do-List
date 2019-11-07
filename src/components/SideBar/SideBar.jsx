import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/today">Today</NavLink>
        <NavLink to="/tomorrow">Tomorrow</NavLink>
        <NavLink to="/recent">Recent</NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
