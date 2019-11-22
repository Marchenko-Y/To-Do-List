import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = props => {
  return (
    <div className="footer">
      <span>Show:</span>
      <ul className="filterButton">
        <li>
          <NavLink to={`/todolist/${props.listName}/SHOW-ALL`}>All</NavLink>
        </li>
        <li>
          <NavLink to={`/todolist/${props.listName}/SHOW-ACTIVE`}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to={`/todolist/${props.listName}/SHOW-COMPLETED`}>
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
