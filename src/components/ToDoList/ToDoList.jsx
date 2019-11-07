import React from "react";
import TodayToDoList from "./TodayToDoList/TodayToDoList";
import Calendar from "./Calendar/Calendar";
import styles from "./ToDoList.module.css";
import { Route } from "react-router-dom";

const ToDoList = props => {
  debugger;
  const addTask = () => {
    props.addTask();
  };
  const onTaskChange = event => {
    const text = event.target.value;
    props.updateTask(text);
  };
  return (
    <div className={styles.main}>
      <Route
        path="/today"
        render={() => (
          <TodayToDoList
            toogleChecked={props.toogleChecked}
            deleteTask={props.deleteTask}
            tasks={props.tasks}
          />
        )}
      />
      <div>
        <input
          type="text"
          placeholder="Введите сообщение"
          onChange={onTaskChange}
          value={props.newTaskText}
        />
      </div>
      <div>
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
    </div>
  );
};
export default ToDoList;
