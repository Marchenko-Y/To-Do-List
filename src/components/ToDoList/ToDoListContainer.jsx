import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  toogleChecked,
  deleteTask,
  toogleEditMode,
  saveEditedTask,
  addTaskThunk
} from "../../redux/reducers/todolist-reducer";
import { getTasksWithFilter } from "../../redux/reducers/visibilityFilter-reselect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const mapStateToProps = (state, props) => {
  const listName = props.match.params.listName;
  const getToDoListInformation = listName => {
    switch (listName) {
      case "SHOW-TODAY-TASK":
        return state.toDoList.toDoLists[0];
      case "SHOW-TOMORROW-TASK":
        return state.toDoList.toDoLists[1];
      default:
        return state.toDoList.toDoLists[2];
    }
  };

  return {
    tasks: getTasksWithFilter(state, props.match.params),
    toDoListInformation: getToDoListInformation(listName),
    listName: props.match.params.listName
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    toogleChecked,
    deleteTask,
    toogleEditMode,
    saveEditedTask,
    addTaskThunk
  })
)(ToDoList);
