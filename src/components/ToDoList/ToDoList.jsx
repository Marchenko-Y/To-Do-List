import React from "react";
import styles from "./ToDoList.module.css";
import SectionDay from "./SectionDay/SectionDay";
import Footer from "../Footer/Footer";

const ToDoList = props => {
  return (
    <div className={styles.main}>
      <div className={styles.section_day}>
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

        <Footer listName={props.listName} tasks={props.tasks} />
      </div>
    </div>
  );
};
export default ToDoList;
