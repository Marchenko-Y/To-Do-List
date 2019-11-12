import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { setVisibilityFilter } from "../../redux/reducers/visibilityFilter-reducer";

const SideBar = props => {
  const onClickFilterSidebar = event => {
    //const filter = event.target.value;
    setVisibilityFilter("SHOW-TASK-TODAY");
  };
  return (
    <nav className="sidebar_block grid_item">
      <li>
        <NavLink
          to="/today"
          value="SHOW-TASK-TODAY"
          onClick={() => onClickFilterSidebar}
        >
          Today
        </NavLink>
      </li>
      <li>
        <NavLink to="/tomorrow">Tomorrow</NavLink>
      </li>
      <li>
        <NavLink to="/recent">Recent</NavLink>
      </li>
    </nav>
  );
};

export default SideBar;
