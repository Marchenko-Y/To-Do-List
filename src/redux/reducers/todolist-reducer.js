const initialState = {
  visibilityFilter: "SHOW-ALL",
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
  debugger;
  switch (action.type) {
    case "TOOGLE_CHECKED":
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id == action.taskId) {
            return { ...t, checked: !t.checked };
          }
          return t;
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
    case "DELETE-TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id != action.taskId)
      };
    case "UPDATE-NEW-TASKS-TEXT":
      return {
        ...state,
        newTaskText: action.newTask
      };
    case "SET-VISIBILITY-FILTER":
      debugger;
      return {
        ...state,
        visibilityFilter: action.filter
      };

    default:
      return state;
  }
};

let nextTodoId = 4;
export const toogleCheckedActionCreator = taskId => {
  return { type: "TOOGLE_CHECKED", taskId };
};

export const addTaskActionCreator = () => {
  return { type: "ADD-TASK", id: nextTodoId++ };
};
export const deleteTaskActionCreator = taskId => {
  return { type: "DELETE-TASK", taskId };
};
export const updateTaskActionCreator = text => {
  return { type: "UPDATE-NEW-TASKS-TEXT", newTask: text };
};

export const setVisibilityFilterActionCreator = filter => {
  return {
    type: "SET-VISIBILITY-FILTER",
    filter
  };
};

export default toDoListReducer;
