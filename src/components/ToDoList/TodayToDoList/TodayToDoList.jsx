import React from "react";
import ToDo from "../ToDo";
import moment from "moment";

const TodayToDoList = props => {
  let currentDate = moment().format("YYYY-MM-DD");
  let todayDateInformation = moment().format("ddd. D MMM");

  const tasks = props.tasks.map(t => {
    if (t.date === currentDate) {
      return (
        <ToDo
          id={t.id}
          checked={t.checked}
          text={t.text}
          toogleChecked={props.toogleChecked}
          deleteTask={props.deleteTask}
        />
      );
    }
  });

  return (
    <div>
      <span>
        <strong>Today</strong> {todayDateInformation}
      </span>
      <div>{tasks}</div>
    </div>
  );
};

export default TodayToDoList;
