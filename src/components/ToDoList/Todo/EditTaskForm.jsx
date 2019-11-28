import React from "react";
import { reduxForm, Field } from "redux-form";

class EditModeForm extends React.Component {
  componentDidMount() {
    this.props.initialize({ taskEditText: this.props.text });
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="taskEditText"
          component="input"
          autoFocus="true"
          type="text"
        />
        <div>
          <button className="addButton">Save</button>
        </div>
      </form>
    );
  }
}

const EditModeReduxForm = reduxForm({ form: "editTaskForm" })(EditModeForm);

export default EditModeReduxForm;
