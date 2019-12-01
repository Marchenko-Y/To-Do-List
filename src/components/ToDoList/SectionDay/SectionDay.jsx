import React from "react";
import ToDo from "../Todo/ToDo";
import format from "date-fns/format";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { SubmissionError } from "redux-form";

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
        date={t.date}
        nameOfDay={props.nameOfDay}
      />
    );
  });
  const totalTasks = tasks.length;

  const addNewTask = values => {
    debugger;
    if (!values.newTaskText) {
      throw new SubmissionError({
        newTaskText: "Fill this field",
        _error: "failed!"
      });
    } else if (!values.date) {
      const date = format(new Date(props.currentDate), "yyyy-MM-dd");
      props.addTask(values.newTaskText, date);
      props.change("addTaskForm", "newTaskText", "");
    } else {
      debugger;
      const date = format(new Date(values.date), "yyyy-MM-dd");
      props.addTask(values.newTaskText, date);
      props.change("addTaskForm", "newTaskText", "");
    }
  };

  return (
    <div>
      <span>
        <strong>{props.nameOfDay}</strong>

        {props.nameOfDay === "Recent"
          ? ""
          : format(new Date(props.currentDate), " iii. dd MMM")}
      </span>

      <div>{tasks}</div>
      <AddTaskForm onSubmit={addNewTask} currentDate={props.currentDate} />

      <span>Total tasks : {totalTasks}</span>
    </div>
  );
};

export default TodoListComponent;
