import React from "react";
import styles from "./ToDo.module.css";
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
        <div className={styles.section_item}>
          <div className={styles.section_item__checkbox}>
            <label>
              <input
                type="checkbox"
                checked={props.checked}
                onChange={changedCheckboxHandler}
                id={props.id}
              />
              <span className={styles.custom_checkbox}></span>
            </label>
          </div>
          <span
            id={props.id}
            onClick={changedEditModeHandler}
            className={props.checked ? styles.completed : null}
          >
            {props.text}

            {props.nameOfDay === "Recent" && (
              <span className={styles.resent_task__date}>
                {format(new Date(props.date), " dd MMM")}
              </span>
            )}
          </span>
          <button onClick={deleteTask} className={styles.deleteButton}>
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
