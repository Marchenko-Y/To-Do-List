import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <Route
        path="/todolist/:listName/:statusFilter?"
        render={() => <ToDoListContainer />}
      />
    </div>
  );
};

export class MyPortal extends React.Component {
  el = document.createElement("div");
  componentDidMount() {
    document.body.appendChild(this.el);
  }
  documentWillMount() {
    document.body.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default App;
