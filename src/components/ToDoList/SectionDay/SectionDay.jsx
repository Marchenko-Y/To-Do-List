import React from "react";
import ToDo from "../Todo/ToDo";
import format from "date-fns/format";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { SubmissionError } from "redux-form";
import styles from "./SectionDay.module.css";

class SectionDay extends React.Component {
  state = {
    showModalWindow: false,
    dateModal: null
  };

  closeModalWindow = () => {
    this.setState({ showModalWindow: false });
  };

  editModeShowModal = (showModal, date) => {
    this.setState({
      showModalWindow: showModal,
      dateModal: date
    });
    setTimeout(this.closeModalWindow, 3000);
  };

  addNewTask = values => {
    if (!values.newTaskText) {
      throw new SubmissionError({
        newTaskText: "Fill this field",
        _error: "failed!"
      });
    } else if (!values.date || values.data === this.props.currentDate) {
      this.props.addTask(values.newTaskText, this.props.currentDate);
      this.editModeShowModal(true, this.props.currentDate);
    } else if (values.data !== this.props.currentDate) {
      this.editModeShowModal(true, values.date);
      this.props.addTask(values.newTaskText, values.date);
    }
  };

  render() {
    const tasks = this.props.tasks
      .map(t => {
        return (
          <ToDo
            id={t.id}
            checked={t.checked}
            editMode={t.editMode}
            text={t.text}
            toogleChecked={this.props.toogleChecked}
            toogleEditMode={this.props.toogleEditMode}
            deleteTask={this.props.deleteTask}
            saveEditedTask={this.props.saveEditedTask}
            date={t.date}
            nameOfDay={this.props.nameOfDay}
          />
        );
      })
      .sort((a, b) => {
        return a.props.checked - b.props.checked;
      });

    return (
      <div>
        <h2 className={styles.section_header}>
          <span>{this.props.nameOfDay} </span>
          <span className={styles.section_header__date}>
            {this.props.nameOfDay === "Recent"
              ? ""
              : format(new Date(this.props.currentDate), " iii. dd MMM")}
          </span>
        </h2>

        <div>{tasks}</div>

        <AddTaskForm
          onSubmit={this.addNewTask}
          currentDate={this.props.currentDate}
          showModalWindow={this.state.showModalWindow}
          dateNewTask={this.state.dateModal}
          closeModalWindow={this.closeModalWindow}
        />
      </div>
    );
  }
}

export default SectionDay;
