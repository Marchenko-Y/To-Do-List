import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.left_menu}>
      <nav className={styles.left_menu__filters}>
        <li className={styles.activ}>
          <NavLink
            to="/todolist/SHOW-TODAY-TASK"
            activeClassName={styles.activeLink}
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todolist/SHOW-TOMORROW-TASK"
            activeClassName={styles.activeLink}
          >
            Tomorrow
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todolist/SHOW-RECENT-TASK"
            activeClassName={styles.activeLink}
          >
            Recent
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default SideBar;
