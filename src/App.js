import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import FooterContainer from "./components/Footer/FooterContainer";

const App = () => {
  return (
    //<BrowserRouter>
    <div>
      <Header />
      <div>
        <h1>TO DO List</h1>
      </div>

      <ToDoListContainer />
      <FooterContainer />
    </div>
    //</BrowserRouter>
  );
};

export default App;
