import React from "react";
import ToDo from "../ToDo";

const TodayToDoList = props => {
  let currentDate = new Date();
  let currentDate1 = currentDate.toISOString().substring(0, 10);

  const locale = "en-us";
  const month = currentDate.toLocaleString(locale, { month: "short" });
  const dayOfWeek = currentDate.toLocaleString(locale, { weekday: "short" });

  const tasks = props.tasks.map(t => {
    debugger;
    if (t.date === currentDate1) {
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
        <strong>Today</strong> {dayOfWeek}. {currentDate.getDate()} {month}
      </span>
      <div>{tasks}</div>
    </div>
  );
};

export default TodayToDoList;
