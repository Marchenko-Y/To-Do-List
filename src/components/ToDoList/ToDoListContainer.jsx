import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTask,
  updateTask,
  toogleChecked,
  deleteTask,
  updateDate,
  getVisibleTasks
} from "../../redux/reducers/todolist-reducer";

const mapStateToProps = state => {
  debugger;
  return {
    tasks: getVisibleTasks(state.toDoList),
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
