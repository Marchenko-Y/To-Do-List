import React from "react";
import styles from "./ToDoList.module.css";

const ToDo = props => {
  const deleteTask = event => {
    props.deleteTask(event.target.id);
  };
  const changedCheckboxHandler = event => {
    props.toogleChecked(event.target.id);
  };
  return (
    <div key={props.id}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={changedCheckboxHandler}
        id={props.id}
      />
      <span className={props.checked ? styles.completed : null}>
        {props.text}
      </span>
      <button
        onClick={deleteTask}
        id={props.id}
        className={styles.deleteButton}
      >
        x
      </button>
    </div>
  );
};
export default ToDo;
