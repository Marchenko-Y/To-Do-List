import { createSelector } from "reselect";
import format from "date-fns/format";
import addDays from "date-fns/addDays";

const SHOW_TODAY_TASK = "SHOW-TODAY-TASK";
const SHOW_TOMORROW_TASK = "SHOW-TOMORROW-TASK";
const SHOW_RECENT_TASK = "SHOW-RECENT-TASK";
const SHOW_ALL = "SHOW-ALL";
const SHOW_ACTIVE = "SHOW-ACTIVE";
const SHOW_COMPLETED = "SHOW-COMPLETED";

let today = format(new Date(), "yyyy-MM-dd");
let addOneDayToToday = addDays(new Date(), 1);
let tomorrow = format(new Date(addOneDayToToday), "yyyy-MM-dd");

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
      case SHOW_TODAY_TASK:
        return tasks.filter(t => {
          return t.date === today;
        });
      case SHOW_TOMORROW_TASK:
        return tasks.filter(t => {
          return t.date === tomorrow;
        });
      case SHOW_RECENT_TASK:
        return tasks.filter(t => {
          return t.date !== today && t.date !== tomorrow;
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
      case SHOW_ALL:
        return tasks;
      case SHOW_ACTIVE:
        return tasks.filter(t => !t.checked);
      case SHOW_COMPLETED:
        return tasks.filter(t => t.checked);
      default:
        return tasks;
    }
  }
);
