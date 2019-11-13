import moment from "moment";
const TOOGLE_CHECKED = "TOOGLE_CHECKED";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_NEW_TASKS_TEXT = "UPDATE_NEW_TASKS_TEXT";
const UPDATE_NEW_DATE = "UPDATE_NEW_DATE";

// let currentDate = new Date();
// currentDate = currentDate.toISOString().substring(0, 10);
// alert(currentDate);
let currentDate = moment().format("YYYY-MM-DD");

const initialState = {
  todolist: [{ id: 1, nameOfDay: "Today", date: currentDate }],
  tasks: [
    {
      id: 1,
      text: "Learn programming 7 hour every day",
      date: currentDate,
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

    default:
      return state;
  }
};

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

export default toDoListReducer;
