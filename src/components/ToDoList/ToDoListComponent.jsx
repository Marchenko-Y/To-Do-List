import React from "react";
import ToDo from "./ToDo/ToDo";
import Calendar from "./Calendar/Calendar";
import format from "date-fns/format";

const TodoListComponent = props => {
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
        editMode={t.editMode}
        text={t.text}
        toogleChecked={props.toogleChecked}
        toogleEditMode={props.toogleEditMode}
        deleteTask={props.deleteTask}
        saveEditedTask={props.saveEditedTask}
        updateEditedTaskText={props.updateEditedTaskText}
      />
    );
  });
  return (
    <div>
      <span>
        <strong>{props.nameOfDay}</strong>
        {format(new Date(props.currentDate), " iii. dd MMM")}
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
        <Calendar
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
