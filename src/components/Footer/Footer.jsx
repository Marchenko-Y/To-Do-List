import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>Show:</span>
      <ul className={styles.filters}>
        <li>
          <NavLink to="/" activeClassName={styles.active}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName={styles.active}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName={styles.active}>
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
