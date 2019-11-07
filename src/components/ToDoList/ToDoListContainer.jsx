import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTask,
  updateTask,
  toogleChecked,
  deleteTask,
  updateDate
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
    newTaskText: state.toDoList.newTaskText,
    newTaskDate: state.toDoList.newTaskDate
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  {
    toogleChecked,
    addTask,
    updateTask,
    deleteTask,
    updateDate
  }
)(ToDoList);
export default ToDoListContainer;
