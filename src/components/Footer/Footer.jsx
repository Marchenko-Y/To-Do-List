import React from "react";
import styles from "./Footer.module.css";

const Footer = props => {
  const onClickFilterButton = event => {
    const filter = event.target.value;
    props.setVisibilityFilter(filter);
  };
  return (
    <div className={styles.footer}>
      <span>Show:</span>
      <ul className={styles.filterButton}>
        <li>
          <button onClick={onClickFilterButton} value="SHOW-ALL">
            All
          </button>
        </li>
        <li>
          <button onClick={onClickFilterButton} value="SHOW-ACTIVE">
            Active
          </button>
        </li>
        <li>
          <button onClick={onClickFilterButton} value="SHOW-COMPLETED">
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
