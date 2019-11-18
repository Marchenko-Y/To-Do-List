import { createSelector } from "reselect";
import format from "date-fns/format";
import addDays from "date-fns/addDays";

const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let today = format(new Date(), "yyyy-MM-dd");
let addOneDayToCurrentDate = addDays(new Date(), 1);
let tomorrow = format(new Date(addOneDayToCurrentDate), "yyyy-MM-dd");

const initialState = {
  toDoLists: [
    { id: 1, nameOfDay: "Today", date: today },
    { id: 2, nameOfDay: "Tomorrow", date: tomorrow },
    { id: 3, nameOfDay: "Recent", date: null }
  ],
  currentToDoList: null
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
  return matcher.listName;
};
const getVisibilityStatusFilter = (state, matcher) => {
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
