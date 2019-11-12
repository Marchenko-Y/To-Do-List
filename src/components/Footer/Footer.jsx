import React from "react";
import "./Footer.css";

const Footer = props => {
  const onClickFilterButton = event => {
    const filter = event.target.value;
    props.setVisibilityFilter(filter);
  };
  return (
    <div className="footer">
      <span>Show:</span>
      <ul className="filterButton">
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
