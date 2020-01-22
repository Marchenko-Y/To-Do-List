import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { Redirect } from "react-router";

const App = () => {
  return (
    <div className="intro">
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/todolist/SHOW-TODAY-TASK" />}
        />
        <Route
          path="/todolist/:listName/:statusFilter?"
          render={() => <ToDoListContainer />}
        />
      </div>
    </div>
  );
};

export default App;
