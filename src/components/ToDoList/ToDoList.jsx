import React from "react";
import "./ToDoList.css";
import TodoListComponent from "./ToDoListComponent";
import Footer from "../Footer/Footer";

const ToDoList = props => {
  return (
    <div className="main grid_item">
      <div className="section-day">
        <TodoListComponent
          addTask={props.addTask}
          updateTask={props.updateTask}
          currentDate={props.toDoListInformation.date}
          toogleChecked={props.toogleChecked}
          deleteTask={props.deleteTask}
          newTaskText={props.newTaskText}
          updateDate={props.updateDate}
          newTaskDate={props.newTaskDate}
          nameOfDay={props.toDoListInformation.nameOfDay}
          tasks={props.tasks}
        />
      </div>

      <Footer listName={props.listName} />
    </div>
  );
};
export default ToDoList;
