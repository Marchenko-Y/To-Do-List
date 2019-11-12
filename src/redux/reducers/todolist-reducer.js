import { createSelector } from "reselect";

const TOOGLE_CHECKED = "TOOGLE_CHECKED";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_NEW_TASKS_TEXT = "UPDATE_NEW_TASKS_TEXT";
const UPDATE_NEW_DATE = "UPDATE_NEW_DATE";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let currentDate = new Date();
currentDate = currentDate.toISOString().substring(0, 10);

const initialState = {
  visibilityFilter: "SHOW_ALL",
  tasks: [
    {
      id: 1,
      text: "Learn programming 7 hour every day",
      date: "2019-11-10",
      checked: false
    },
    {
      id: 2,
      text: "Smile",
      date: currentDate,
      checked: false
    },
    {
      id: 3,
      text: "Sleep 8 hours",
      date: currentDate,
      checked: true
    }
  ],
  newTaskText: "",
  newTaskDate: currentDate
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_CHECKED:
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id == action.taskId) {
            return { ...t, checked: !t.checked };
          }
          return t;
        })
      };

    case ADD_TASK:
      debugger;
      const newTask = {
        id: action.id,
        text: state.newTaskText,
        date: state.newTaskDate,
        checked: false
      };

      return {
        ...state,
        newTaskText: "",
        newTaskDate: currentDate,
        tasks: [...state.tasks, newTask]
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id != action.taskId)
      };
    case UPDATE_NEW_TASKS_TEXT:
      return {
        ...state,
        newTaskText: action.newTask
      };
    case UPDATE_NEW_DATE:
      return {
        ...state,
        newTaskDate: action.newDate
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };

    default:
      return state;
  }
};

const getVisibilityFilter = state => state.visibilityFilter;
const getTasks = state => state.tasks;

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

let nextTodoId = 4;
export const toogleChecked = taskId => {
  return { type: TOOGLE_CHECKED, taskId };
};
export const addTask = () => {
  return { type: ADD_TASK, id: nextTodoId++ };
};
export const deleteTask = taskId => {
  return { type: DELETE_TASK, taskId };
};
export const updateTask = text => {
  return { type: UPDATE_NEW_TASKS_TEXT, newTask: text };
};
export const updateDate = date => {
  return { type: UPDATE_NEW_DATE, newDate: date };
};
export const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter };
};

export default toDoListReducer;
