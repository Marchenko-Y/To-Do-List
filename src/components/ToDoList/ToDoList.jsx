import React from "react";
import "./ToDoList.css";
import SectionDay from "./SectionDay/SectionDay";
import Footer from "../Footer/Footer";

const ToDoList = props => {
  return (
    <div className="main grid_item">
      <div className="section-day">
        <SectionDay
          currentDate={props.toDoListInformation.date}
          toogleChecked={props.toogleChecked}
          toogleEditMode={props.toogleEditMode}
          deleteTask={props.deleteTask}
          nameOfDay={props.toDoListInformation.nameOfDay}
          tasks={props.tasks}
          saveEditedTask={props.saveEditedTask}
          addTask={props.addTaskThunk}
        />
      </div>

      <Footer listName={props.listName} />
    </div>
  );
};
export default ToDoList;
