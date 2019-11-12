import toDoListReducer from "./reducers/todolist-reducer";
import { combineReducers, createStore } from "redux";
import visibilityFilterReducer from "./reducers/visibilityFilter-reducer";

const reducers = combineReducers({
  toDoList: toDoListReducer,
  visibilityFilter: visibilityFilterReducer
});

let store = createStore(reducers);

export default store;
