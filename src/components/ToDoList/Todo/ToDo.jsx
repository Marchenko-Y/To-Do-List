import React from "react";
import "../ToDoList.css";
import EditModeReduxForm from "./EditTaskForm";
import format from "date-fns/format";

const ToDo = props => {
  const deleteTask = () => {
    props.deleteTask(props.id);
  };
  const changedCheckboxHandler = event => {
    props.toogleChecked(event.target.id);
  };

  const changedEditModeHandler = event => {
    props.toogleEditMode(event.target.id);
  };

  const saveEditedTask = values => {
    props.saveEditedTask(values.taskEditText, props.id);
  };

  return (
    <div key={props.id}>
      {/* если режим редактирования задачи false: */}
      {!props.editMode && (
        <div>
          <input
            type="checkbox"
            checked={props.checked}
            onChange={changedCheckboxHandler}
            id={props.id}
          />
          <span
            id={props.id}
            onClick={changedEditModeHandler}
            className={props.checked ? "completed" : null}
          >
            {props.text}

            {props.nameOfDay === "Recent" && (
              <span className="dateOfRecentTasks">
                {format(new Date(props.date), " dd MMM")}
              </span>
            )}
          </span>
          <button onClick={deleteTask} className="deleteButton">
            x
          </button>
        </div>
      )}
      {/* если режим редактирования задачи true:  */}
      {props.editMode && (
        <EditModeReduxForm onSubmit={saveEditedTask} text={props.text} />
      )}
    </div>
  );
};

export default ToDo;
