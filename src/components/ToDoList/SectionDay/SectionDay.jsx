import React from "react";
import ToDo from "../Todo/ToDo";
import format from "date-fns/format";
import AddTaskForm from "./AddTaskForm";

const TodoListComponent = props => {
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
  const totalTasks = tasks.length;

  const addNewTask = values => {
    props.addTask(values.newTaskText);
    props.reset("addTaskForm");
  };

  return (
    <div>
      <span>
        <strong>{props.nameOfDay}</strong>

        {props.currentDate
          ? format(new Date(props.currentDate), " iii. dd MMM")
          : ""}
      </span>

      <div>{tasks}</div>
      <AddTaskForm
        onSubmit={addNewTask}
        updateDate={props.updateDate}
        newTaskDate={props.newTaskDate}
        currentDate={props.currentDate}
      />

      <span>Total tasks : {totalTasks}</span>
    </div>
  );
};

export default TodoListComponent;
