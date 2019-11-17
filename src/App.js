import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <Route
          exact
          path="/todolist/:listName/:statusFilter?"
          render={() => <ToDoListContainer />}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
