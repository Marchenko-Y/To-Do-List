import format from "date-fns/format";
import addDays from "date-fns/addDays";

const TOOGLE_CHECKED = "TOOGLE_CHECKED";
const TOOGLE_EDIT_MODE = "TOOGLE_EDIT_MODE";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_NEW_TASKS_TEXT = "UPDATE_NEW_TASKS_TEXT";
const UPDATE_NEW_DATE = "UPDATE_NEW_DATE";
const SAVE_EDITED_TASK = "SAVE_EDITED_TASK";
const UPDATE_EDITED_TASKS_TEXT = "UPDATE_EDITED_TASKS_TEXT";

let currentDate = format(new Date(), "yyyy-MM-dd");
let addOneDayToCurrentDate = addDays(new Date(), 1);
let tomorrow = format(new Date(addOneDayToCurrentDate), "yyyy-MM-dd");

const initialState = {
  tasks: [
    {
      id: 1,
      text: "Learn programming 7 hour every day",
      date: currentDate,
      checked: false,
      editMode: false,
      editedTaskText: ""
    },
    {
      id: 2,
      text: "Smile",
      date: currentDate,
      checked: false,
      editMode: false,
      editedTaskText: ""
    },
    {
      id: 3,
      text: "Sleep 8 hours",
      date: currentDate,
      checked: true,
      editMode: false,
      editedTaskText: ""
    },
    {
      id: 4,
      text: "Sleep 9 hours",
      date: tomorrow,
      checked: false,
      editMode: false,
      editedTaskText: ""
    },
    {
      id: 5,
      text: "Go to the park",
      date: tomorrow,
      checked: false,
      editMode: false,
      editedTaskText: ""
    },
    {
      id: 6,
      text: "To do task home",
      date: tomorrow,
      checked: false,
      editMode: false,
      editedTaskText: ""
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
    case TOOGLE_EDIT_MODE:
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id == action.taskId) {
            return { ...t, editMode: !t.editMode };
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
    case UPDATE_EDITED_TASKS_TEXT:
      debugger;
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id == action.taskId) {
            debugger;
            return { ...t, editedTaskText: action.editedTaskText };
          }
          return t;
        })
      };
    case UPDATE_NEW_DATE:
      return {
        ...state,
        newTaskDate: action.newDate
      };
    case SAVE_EDITED_TASK:
      debugger;
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id == action.taskId) {
            debugger;
            return { ...t, text: action.editedText, editMode: false };
          }
          return t;
        })
      };

    default:
      return state;
  }
};

let nextTodoId = 4;
export const toogleChecked = taskId => {
  return { type: TOOGLE_CHECKED, taskId };
};
export const toogleEditMode = taskId => {
  return { type: TOOGLE_EDIT_MODE, taskId };
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
export const updateEditedTaskText = (text, taskId) => {
  return { type: UPDATE_EDITED_TASKS_TEXT, editedTaskText: text, taskId };
};
export const updateDate = date => {
  return { type: UPDATE_NEW_DATE, newDate: date };
};
export const saveEditedTask = (editedText, taskId) => {
  return { type: SAVE_EDITED_TASK, editedText, taskId };
};

export default toDoListReducer;
