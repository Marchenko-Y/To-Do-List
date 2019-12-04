import React from "react";
import renderDataField from "../../Calendar/Calendar";
import { reduxForm, Field } from "redux-form";
import { Input } from "./FormsConrols";
import Modal from "../../../ModalWindow/ModalWindow";
import format from "date-fns/format";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMode: false
    };
  }

  activatedAddMode = () => {
    this.setState({
      addMode: true
    });
  };

  deactivatedAddMode = () => {
    this.setState({
      addMode: false
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {!this.state.addMode && (
          <div>
            + <button onClick={this.activatedAddMode}>Add task</button>
          </div>
        )}
        {this.state.addMode && (
          <>
            <div>
              <Field
                name="newTaskText"
                component={Input}
                placeholder="Введите сообщение"
                type="text"
              />
            </div>
            <div>
              <Field
                name="date"
                component={renderDataField}
                currentDate={this.props.currentDate}
              />
            </div>
            <div>
              <button className="addButton">Add task</button>
              <button onClick={this.deactivatedAddMode}>Cancel</button>
            </div>
          </>
        )}
        <Modal showModal={this.props.showModalWindow}>
          <div>
            {" "}
            Task add to
            {format(new Date(this.props.dateNewTask), "  dd MMM(iiii)")}
          </div>
        </Modal>
      </form>
    );
  }
}

const AddTaskReduxForm = reduxForm({
  form: "addTaskForm"
})(AddTaskForm);
export default AddTaskReduxForm;
