import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/29/c6/a6/29c6a6d1-3d6b-afb0-85ce-bef0e8505639/source/512x512bb.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
