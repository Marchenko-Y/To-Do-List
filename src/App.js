import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import ActiveTasks from "./components/Footer/ActiveTasks/ActiveTasks";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <h1>TO DO List</h1>
        </div>

        <ToDoListContainer />
        <Footer />
        <Route path="#/active" component={ActiveTasks} />
        {/* <Route path="/completed" component={CompletedTasks} /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
