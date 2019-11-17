import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = props => {
  return (
    <nav className="sidebar_block grid_item">
      <li>
        <NavLink to="/todolist/SHOW-TODAY-TASK">Today</NavLink>
      </li>
      <li>
        <NavLink to="/todolist/SHOW-TOMORROW-TASK">Tomorrow</NavLink>
      </li>
      <li>
        <NavLink to="/todolist/recent">Recent</NavLink>
      </li>
    </nav>
  );
};

export default SideBar;
