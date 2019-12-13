import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <NavLink to="/todolist/SHOW-TODAY-TASK">
              <img
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/29/c6/a6/29c6a6d1-3d6b-afb0-85ce-bef0e8505639/source/512x512bb.png"
                alt="logo"
              />
            </NavLink>
            <h3>To Do List</h3>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
