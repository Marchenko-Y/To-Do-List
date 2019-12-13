import React from "react";
import { reduxForm, Field } from "redux-form";
import styles from "./ToDo.module.css";

class EditModeForm extends React.Component {
  componentDidMount() {
    this.props.initialize({ taskEditText: this.props.text });
  }
  render() {
    return (
      <form
        className={styles.edit_task_form}
        onSubmit={this.props.handleSubmit}
      >
        <Field
          name="taskEditText"
          component="input"
          autoFocus="true"
          type="text"
        />

        <div>
          <button className={styles.addButton}>Save</button>
        </div>
      </form>
    );
  }
}

const EditModeReduxForm = reduxForm({ form: "editTaskForm" })(EditModeForm);

export default EditModeReduxForm;
