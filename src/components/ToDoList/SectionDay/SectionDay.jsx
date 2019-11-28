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
        updateEditedTaskText={props.updateEditedTaskText}
      />
    );
  });
  const totalTasks = tasks.length;

  const addNewTask = values => {
    if (!values.newTaskText) {
      throw new SubmissionError({
        newTaskText: "Fill this field",
        _error: "failed!"
      });
    } else {
      props.addTask(values.newTaskText);
      props.reset("addTaskForm");
    }
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
        currentDate={props.currentDate}
      />

      <span>Total tasks : {totalTasks}</span>
    </div>
  );
};

export default TodoListComponent;
