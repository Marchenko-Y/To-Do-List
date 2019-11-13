import React from "react";
import ToDo from "./ToDo";

const TodoListComponent = props => {
  const addTask = () => {
    props.addTask();
  };
  const onTaskChange = event => {
    const text = event.target.value;
    props.updateTask(text);
  };
  const tasks = props.tasks.map(t => {
    if (t.date === props.currentDate1) {
      return (
        <ToDo
          id={t.id}
          checked={t.checked}
          text={t.text}
          toogleChecked={props.toogleChecked}
          deleteTask={props.deleteTask}
        />
      );
    }
  });
  return (
    <div>
      <span>
        <strong>{props.nameOfDay}</strong> {props.dayOfWeek}.{" "}
        {currentDate.getDate()} {props.month}
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
        <calendarFormat
          updateDate={props.updateDate}
          newTaskDate={props.newTaskDate}
        />
      </div>
      <div>
        <button className="addButton" onClick={addTask}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default TodoListComponent;
