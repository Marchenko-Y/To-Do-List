import React from "react";
import ToDo from "../Todo/ToDo";
import format from "date-fns/format";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { SubmissionError } from "redux-form";

class SectionDay extends React.Component {
  state = {
    showModalWindow: false,
    dateModal: null
  };

  addNewTask = values => {
    if (!values.newTaskText) {
      throw new SubmissionError({
        newTaskText: "Fill this field",
        _error: "failed!"
      });
    } else if (!values.date || values.data === this.props.currentDate) {
      this.props.addTask(values.newTaskText, this.props.currentDate);
    } else if (values.data !== this.props.currentDate) {
      this.setState({
        showModalWindow: true,
        dateModal: values.date
      });
      this.props.addTask(values.newTaskText, values.date);
    }
  };
  render() {
    const tasks = this.props.tasks.map(t => {
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
    });
    return (
      <div>
        <span>
          <strong>{this.props.nameOfDay}</strong>

          {this.props.nameOfDay === "Recent"
            ? ""
            : format(new Date(this.props.currentDate), " iii. dd MMM")}
        </span>
        <div>{tasks}</div>
        <AddTaskForm
          onSubmit={this.addNewTask}
          currentDate={this.props.currentDate}
          showModalWindow={this.state.showModalWindow}
          dateNewTask={this.state.dateModal}
        />
        <span>Total tasks : {tasks.length}</span>
      </div>
    );
  }
}

export default SectionDay;
