import React from "react";
import "./ToDoList.css";
import SectionDay from "./SectionDay/SectionDay";
import Footer from "../Footer/Footer";

const ToDoList = props => {
  return (
    <div className="main grid_item">
      <div className="section-day">
        <SectionDay
          addTask={props.addTask}
          currentDate={props.toDoListInformation.date}
          toogleChecked={props.toogleChecked}
          toogleEditMode={props.toogleEditMode}
          deleteTask={props.deleteTask}
          updateDate={props.updateDate}
          newTaskDate={props.newTaskDate}
          nameOfDay={props.toDoListInformation.nameOfDay}
          tasks={props.tasks}
          saveEditedTask={props.saveEditedTask}
          updateEditedTaskText={props.updateEditedTaskText}
          reset={props.reset}
        />
      </div>

      <Footer listName={props.listName} />
    </div>
  );
};
export default ToDoList;
