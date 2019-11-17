import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTask,
  updateTask,
  toogleChecked,
  deleteTask,
  updateDate
} from "../../redux/reducers/todolist-reducer";
import { getTasksWithFilter } from "../../redux/reducers/visibilityFilter-reducer";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, props) => {
  return {
    tasks: getTasksWithFilter(state, props.match.params),
    newTaskText: state.toDoList.newTaskText,
    newTaskDate: state.toDoList.newTaskDate,
    toDoListInformation: state.visibilityFilter.toDoLists,
    listName: props.match.params.listName
  };
};
const ToDoListContainer = connect(mapStateToProps, {
  toogleChecked,
  addTask,
  updateTask,
  deleteTask,
  updateDate
})(ToDoList);
export default withRouter(ToDoListContainer);
