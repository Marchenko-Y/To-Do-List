import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  addTask,
  toogleChecked,
  deleteTask,
  updateDate,
  toogleEditMode,
  saveEditedTask
} from "../../redux/reducers/todolist-reducer";
import { getTasksWithFilter } from "../../redux/reducers/visibilityFilter-reducer";
import { withRouter } from "react-router-dom";
import { reset } from "redux-form";

const mapStateToProps = (state, props) => {
  const listName = props.match.params.listName;
  const getToDoListInformation = listName => {
    switch (listName) {
      case "SHOW-TODAY-TASK":
        return state.visibilityFilter.toDoLists[0];
      case "SHOW-TOMORROW-TASK":
        return state.visibilityFilter.toDoLists[1];
      default:
        return state.visibilityFilter.toDoLists[2];
    }
  };

  return {
    tasks: getTasksWithFilter(state, props.match.params),
    toDoListInformation: getToDoListInformation(listName),
    listName: props.match.params.listName
  };
};

const ToDoListContainer = connect(mapStateToProps, {
  toogleChecked,
  addTask,
  deleteTask,
  updateDate,
  toogleEditMode,
  saveEditedTask,
  reset
})(ToDoList);
export default withRouter(ToDoListContainer);
