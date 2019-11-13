import { createSelector } from "reselect";

const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
let currentDate = new Date();
currentDate = currentDate.toISOString().substring(0, 10);

const initialState = {
  visibilityFilter: "SHOW_ALL"
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

const getVisibilityFilter = (state1, state2) => state1.visibilityFilter;
const getTasks = (state1, state2) => state2.tasks;

export const getVisibleTasks = createSelector(
  [getVisibilityFilter, getTasks],
  (visibilityFilter, tasks) => {
    switch (visibilityFilter) {
      case "SHOW-ALL":
        return tasks;
      case "SHOW-ACTIVE":
        return tasks.filter(t => !t.checked);
      case "SHOW-COMPLETED":
        return tasks.filter(t => t.checked);
      case "SHOW-TASK-TODAY":
        return tasks.filter(t => t.date === currentDate);
      default:
        return tasks;
    }
  }
);

export const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter };
};

export default visibilityFilterReducer;
