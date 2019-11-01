import React from "react";
import styles from "./ToDoList.module.css";

const ToDo = props => (
  <div key={props.id}>
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.changedCheckboxHandler}
      id={props.id}
    />
    <span className={props.checked ? styles.completed : null}>
      {props.text}
    </span>
  </div>
);

export default ToDo;
