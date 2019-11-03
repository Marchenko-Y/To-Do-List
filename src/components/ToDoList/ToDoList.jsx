import React from "react";
import styles from "./ToDoList.module.css";
import ToDo from "./ToDo";
import Calendar from "./Calendar/Calendar";

const ToDoList = props => {
  const changedCheckboxHandler = event => {
    props.toogleChecked(event.target.id);
  };
  const deleteTask = event => {
    props.deleteTask(event.target.id);
  };

  const addTask = () => {
    props.addTask();
  };
  const onTaskChange = event => {
    const text = event.target.value;
    props.updateTask(text);
  };

  const tasks = props.tasks.map(t => {
    return (
      <ToDo
        id={t.id}
        checked={t.checked}
        text={t.text}
        changedCheckboxHandler={changedCheckboxHandler}
        deleteTask={deleteTask}
      />
    );
  });

  return (
    <section className={styles.main}>
      <span>
        <strong>Сегодня</strong> сб 2 ноября
      </span>
      <div>{tasks}</div>

      <div>
        <input
          type="text"
          placeholder="Введите сообщение"
          onChange={onTaskChange}
          value={props.newTaskText}
        />
      </div>
      <div>
        {/* <input type="date" required /> */}
        <Calendar
          updateDate={props.updateDate}
          newTaskDate={props.newTaskDate}
        />
      </div>
      <div>
        <button className={styles.addButton} onClick={addTask}>
          Add task
        </button>
      </div>
    </section>
  );
};
export default ToDoList;
