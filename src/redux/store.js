import toDoListReducer from "./reducers/todolist-reducer";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  toDoList: toDoListReducer
});

let store = createStore(reducers);

export default store;
