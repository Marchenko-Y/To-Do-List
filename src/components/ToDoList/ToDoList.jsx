import React from "react";
import styles from "./ToDoList.module.css";
import ToDo from "./ToDo";

const ToDoList = props => {
  const changedCheckboxHandler = event => {
    props.toogleChecked(event.target.id);
  };

  const tasks = props.tasks.map(t => {
    return (
      <ToDo
        id={t.id}
        checked={t.checked}
        text={t.text}
        changedCheckboxHandler={changedCheckboxHandler}
      />
    );
  });

  const addTask = () => {
    props.addTask();
  };
  const onTaskChange = event => {
    const text = event.target.value;
    props.updateTask(text);
  };

  return (
    <section className={styles.main}>
      <div>
        <textarea
          placeholder="Введите сообщение"
          onChange={onTaskChange}
          value={props.newTaskText}
        />
      </div>
      <div>
        <button className={styles.addButton} onClick={addTask}>
          Add task
        </button>
      </div>
      <div>{tasks}</div>
    </section>
  );
};
export default ToDoList;
