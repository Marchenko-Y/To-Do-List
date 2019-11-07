import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SideBar />
        <ToDoListContainer />
        <FooterContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
