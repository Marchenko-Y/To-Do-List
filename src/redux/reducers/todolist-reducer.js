const initialState = {
  tasks: [
    {
      id: 1,
      text: "Learn programming 7 hour every day",
      date: "20.10.2019",
      checked: false
    },
    {
      id: 2,
      text: "Smile",
      date: "20.10.2019",
      checked: false
    },
    {
      id: 3,
      text: "Sleep 8 hours",
      date: "20.10.2019",
      checked: true
    }
  ],
  newTaskText: ""
};
const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        ...state,
        tasks: state.tasks.map(n => {
          if (n.id == action.taskId) {
            return { ...n, checked: true };
          }
          return n;
        })
      };
    case "UNCHECK":
      return {
        ...state,
        tasks: state.tasks.map(n => {
          if (n.id == action.taskId) {
            return { ...n, checked: false };
          }
          return n;
        })
      };
    case "ADD-TASK":
      const newTask = {
        id: action.id,
        text: state.newTaskText,
        date: "20.10.2019",
        checked: false
      };
      return {
        ...state,
        newTaskText: "",
        tasks: [...state.tasks, newTask]
      };
    case "UPDATE-NEW-TASKS-TEXT":
      return {
        ...state,
        newTaskText: action.newTask
      };

    default:
      return state;
  }
};

let nextTodoId = 4;
export const checkActionCreator = taskId => {
  return { type: "CHECK", taskId };
};
export const uncheckActionCreator = taskId => {
  return { type: "UNCHECK", taskId };
};
export const addTaskActionCreator = () => {
  return { type: "ADD-TASK", id: nextTodoId++ };
};
export const updateTaskActionCreator = text => {
  return { type: "UPDATE-NEW-TASKS-TEXT", newTask: text };
};

export default toDoListReducer;
