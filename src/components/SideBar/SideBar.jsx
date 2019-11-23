import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = props => {
  return (
    <div className="left_menu">
      <nav className="left_menu_filters grid_item">
        <li>
          <NavLink to="/todolist/SHOW-TODAY-TASK">Today</NavLink>
        </li>
        <li>
          <NavLink to="/todolist/SHOW-TOMORROW-TASK">Tomorrow</NavLink>
        </li>
        <li>
          <NavLink to="/todolist/SHOW-RECENT-TASK">Recent</NavLink>
        </li>
      </nav>
    </div>
  );
};

export default SideBar;
