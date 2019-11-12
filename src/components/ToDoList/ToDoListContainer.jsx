import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTask,
  updateTask,
  toogleChecked,
  deleteTask,
  updateDate
} from "../../redux/reducers/todolist-reducer";
import { getVisibleTasks } from "../../redux/reducers/visibilityFilter-reducer";

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.visibilityFilter, state.toDoList),
    newTaskText: state.toDoList.newTaskText,
    newTaskDate: state.toDoList.newTaskDate
  };
};
export default connect(
  mapStateToProps,
  {
    toogleChecked,
    addTask,
    updateTask,
    deleteTask,
    updateDate
  }
)(ToDoList);
