import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTaskActionCreator,
  updateTaskActionCreator,
  toogleCheckedActionCreator
} from "../../redux/reducers/todolist-reducer";

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case "SHOW-ALL":
      return tasks;
    case "SHOW-ACTIVE":
      return tasks.filter(t => !t.checked);
    case "SHOW-COMPLETED":
      return tasks.filter(t => t.checked);
    default:
      return tasks;
  }
};

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(
      state.toDoList.tasks,
      state.toDoList.visibilityFilter
    ),
    newTaskText: state.toDoList.newTaskText
  };
};
const mapDispathToProps = dispatch => {
  return {
    toogleChecked: taskId => {
      dispatch(toogleCheckedActionCreator(taskId));
    },

    addTask: () => {
      dispatch(addTaskActionCreator());
    },
    updateTask: text => {
      dispatch(updateTaskActionCreator(text));
    }
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(ToDoList);
export default ToDoListContainer;
