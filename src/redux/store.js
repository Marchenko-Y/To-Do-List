import toDoListReducer from "./reducers/todolist-reducer";
import { reducer as formReducer } from "redux-form";
import thunkMidleware from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// const store = configureStore({
//   reducer: {
//     toDoList: toDoListReducer,
//     form: formReducer
//   }
// });

const reducers = combineReducers({
  toDoList: toDoListReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMidleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store;

// import { combineReducers, createStore } from "redux";
// import visibilityFilterReducer from "./reducers/visibilityFilter-reducer";
// import { reducer as formReducer } from "redux-form";

// const reducers = combineReducers({
//   toDoList: toDoListReducer,
//   visibilityFilter: visibilityFilterReducer,
//   form: formReducer
// });

// let store = createStore(reducers);

// export default store;
