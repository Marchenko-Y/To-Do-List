import React from "react";
import renderDataField from "../../Calendar/Calendar";
import { reduxForm, Field } from "redux-form";
import { Input } from "./FormsConrols";
import Modal from "../../../ModalWindow/ModalWindow";
import format from "date-fns/format";
import styles from "./AddTaskForm.module.css";

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
        {/* если режим добавления задачи false: */}
        {!this.state.addMode && (
          <div className={styles.add_task_link}>
            <a href="#" onClick={this.activatedAddMode}>
              <span className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  data-svgs-path="sm1/plus.svg"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                  ></path>
                </svg>
              </span>
              Add task
            </a>
          </div>
        )}

        {/* если режим добавления задачи true: */}
        {this.state.addMode && (
          <>
            <div className={styles.add_task_fields}>
              <div>
                <Field
                  className={styles.add_task_text}
                  name="newTaskText"
                  component={Input}
                  autoFocus="true"
                  type="text"
                  placeholder="What need to be done?"
                />
              </div>
              <div>
                <Field
                  name="date"
                  component={renderDataField}
                  currentDate={this.props.currentDate}
                />
              </div>
            </div>
            <div>
              <button className={styles.addButton}>Add task</button>
              <button
                className={styles.cancelButton}
                onClick={this.deactivatedAddMode}
              >
                Cancel
              </button>
            </div>
          </>
        )}
        <Modal
          showModal={this.props.showModalWindow}
          closeModalWindow={this.props.closeModalWindow}
        >
          <div>
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
