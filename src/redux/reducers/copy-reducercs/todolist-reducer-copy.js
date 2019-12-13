import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { createReducer, createAction } from "@reduxjs/toolkit";

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
      editMode: false
    },
    {
      id: 2,
      text: "Smile",
      date: currentDate,
      checked: false,
      editMode: false
    },
    {
      id: 3,
      text: "Sleep 8 hours",
      date: currentDate,
      checked: true,
      editMode: false
    },
    {
      id: 4,
      text: "Sleep 9 hours",
      date: tomorrow,
      checked: false,
      editMode: false
    },
    {
      id: 5,
      text: "Go to the park",
      date: tomorrow,
      checked: false,
      editMode: false
    },
    {
      id: 6,
      text: "To do task home",
      date: tomorrow,
      checked: false,
      editMode: false
    }
  ],
  toDoLists: [
    { id: 1, nameOfDay: "Today", date: today },
    { id: 2, nameOfDay: "Tomorrow", date: tomorrow },
    { id: 3, nameOfDay: "Recent", date: today }
  ]
};

const toDoListReducer = createReducer(initialState, {
  TOOGLE_CHECKED: (state, action) => {
    const task = state.tasks.find(task => task.id == action.payload);
    if (task) {
      task.checked = !task.checked;
    }
  },
  TOOGLE_EDIT_MODE: (state, action) => {
    // return {
    //   ...state,
    //   tasks: state.tasks.map(t => {
    //     if (t.id == action.taskId) {
    //       return { ...t, editMode: !t.editMode };
    //     }
    //     return { ...t, editMode: false };
    //   })
    // };
    const task = state.tasks.find(task => task.id == action.payload);
    if (task) {
      task.editMode = !task.editMode;
    }
  },
  ADD_TASK: (state, action) => {
    const newTask = {
      id: action.payload.id,
      text: action.payload.newTaskText,
      date: state.newTaskDate,
      checked: false
    };
    state.tasks.push(newTask);
  },
  DELETE_TASK: (state, action) => {
    return state.tasks.filter(t => t.id != action.payload);
  },

  SAVE_EDITED_TASK: (state, action) => {
    const task = state.tasks.find(task => task.id == action.payload.taskId);
    task.text = action.payload.editedText;
    task.editMode = false;
  }
});

let nextTodoId = 4;

export const toogleChecked = createAction("TOOGLE_CHECKED");
export const toogleEditMode = createAction("TOOGLE_EDIT_MODE");
export const addTask = createAction("ADD_TASK", newTaskText => {
  return {
    payload: { id: nextTodoId++, newTaskText }
  };
});
export const deleteTask = createAction("DELETE_TASK");

export const saveEditedTask = createAction(
  "SAVE_EDITED_TASK",
  (editedText, taskId) => {
    return {
      payload: { editedText, taskId }
    };
  }
);

//export const toogleChecked = taskId => {
//return { type: TOOGLE_CHECKED, taskId };
//};
//export const toogleEditMode = taskId => {
// return { type: TOOGLE_EDIT_MODE, taskId };
//};
//export const addTask = newTaskText => {
// return { type: ADD_TASK, id: nextTodoId++, newTaskText };
//};
//export const deleteTask = taskId => {
// return { type: DELETE_TASK, taskId };
//};

//export const updateDate = date => {
//return { type: UPDATE_NEW_DATE, newDate: date };
//};
//export const saveEditedTask = (editedText, taskId) => {
//return { type: SAVE_EDITED_TASK, editedText, taskId };
//};

export default toDoListReducer;

// }) => {
//   switch (action.type) {
//     case TOOGLE_CHECKED:
//       return {
//         ...state,
//         tasks: state.tasks.map(t => {
//           if (t.id == action.taskId) {
//             return { ...t, checked: !t.checked };
//           }
//           return t;
//         })
//       };
//     case TOOGLE_EDIT_MODE:
//       return {
//         ...state,
//         tasks: state.tasks.map(t => {
//           if (t.id == action.taskId) {
//             return { ...t, editMode: !t.editMode };
//           }
//           return { ...t, editMode: false };
//         })
//       };

//     case ADD_TASK:
//       const newTask = {
//         id: action.id,
//         text: action.newTaskText,
//         date: state.newTaskDate,
//         checked: false
//       };

//       return {
//         ...state,
//         tasks: [...state.tasks, newTask]
//       };

//     case DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter(t => t.id != action.taskId)
//       };

//     case UPDATE_NEW_DATE:
//       return {
//         ...state,
//         newTaskDate: action.newDate
//       };
//     case SAVE_EDITED_TASK:

//       return {
//         ...state,
//         tasks: state.tasks.map(t => {
//           if (t.id == action.taskId) {
//             return { ...t, text: action.editedText, editMode: false };
//           }
//           return t;
//         })
//       };

//     default:
//       return state;
//   }
// };
