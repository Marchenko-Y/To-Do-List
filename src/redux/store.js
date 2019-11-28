import toDoListReducer from "./reducers/todolist-reducer";
import { combineReducers, createStore } from "redux";
import visibilityFilterReducer from "./reducers/visibilityFilter-reducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  toDoList: toDoListReducer,
  visibilityFilter: visibilityFilterReducer,
  form: formReducer
});

let store = createStore(reducers);

export default store;
