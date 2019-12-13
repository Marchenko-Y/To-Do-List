import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = props => {
  const leftTasks = props.tasks.filter(task => {
    return task.checked === false;
  });
  return (
    <div className={styles.footer}>
      <span>{leftTasks.length} tasks left</span>

      <div>
        <ul className={styles.filterButton}>
          <li>
            <NavLink
              to={`/todolist/${props.listName}/SHOW-ALL`}
              activeClassName={styles.activeLink}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/todolist/${props.listName}/SHOW-ACTIVE`}
              activeClassName={styles.activeLink}
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/todolist/${props.listName}/SHOW-COMPLETED`}
              activeClassName={styles.activeLink}
            >
              Completed
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
