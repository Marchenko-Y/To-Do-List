import { createSelector } from "reselect";
import moment from "moment";

const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const today = moment().format("YYYY-MM-DD");
const tomorrow = moment("2019-11-18").format("YYYY-MM-DD");

const initialState = {
  toDoLists: [
    { id: 1, nameOfDay: "Today", date: today },
    { id: 2, nameOfDay: "Tommorow", date: tomorrow }
  ]
};

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state;
  }
};

const getTasks = state => {
  return state.toDoList.tasks;
};
const getVisibilityFilter = (state, matcher) => {
  debugger;
  return matcher.listName;
};
const getVisibilityStatusFilter = (state, matcher) => {
  debugger;
  return matcher.statusFilter;
};
export const getVisibleTasks = createSelector(
  [getTasks, getVisibilityFilter],
  (tasks, visibilityFilter) => {
    switch (visibilityFilter) {
      case "SHOW-TODAY-TASK":
        return tasks.filter(t => {
          return t.date === today;
        });
      case "SHOW-TOMORROW-TASK":
        return tasks.filter(t => {
          debugger;
          return t.date === tomorrow;
        });
      default:
        return tasks;
    }
  }
);

export const getTasksWithFilter = createSelector(
  [getVisibleTasks, getVisibilityStatusFilter],
  (tasks, visibilityFilter) => {
    switch (visibilityFilter) {
      case "SHOW-ALL":
        return tasks;
      case "SHOW-ACTIVE":
        debugger;
        return tasks.filter(t => !t.checked);
      case "SHOW-COMPLETED":
        return tasks.filter(t => t.checked);
      default:
        return tasks;
    }
  }
);

export const setVisibilityFilter = filter => {
  debugger;
  return { type: SET_VISIBILITY_FILTER, filter };
};

export default visibilityFilterReducer;
