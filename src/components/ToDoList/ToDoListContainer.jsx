import React from "react";
import styles from "./ToDoList.module.css";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  checkActionCreator,
  uncheckActionCreator,
  addTaskActionCreator,
  updateTaskActionCreator
} from "../../redux/reducers/todolist-reducer";

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.toDoList.tasks,
    newTaskText: state.toDoList.newTaskText
  };
};
const mapDispathToProps = dispatch => {
  return {
    check: taskId => {
      dispatch(checkActionCreator(taskId));
    },
    uncheck: taskId => {
      dispatch(uncheckActionCreator(taskId));
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
