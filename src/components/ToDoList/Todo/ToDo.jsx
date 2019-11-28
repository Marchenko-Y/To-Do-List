import React from "react";
import "../ToDoList.css";

class ToDo extends React.Component {
  state = {
    inputValue: this.props.text
  };

  deleteTask = event => {
    this.props.deleteTask(event.target.id);
  };
  changedCheckboxHandler = event => {
    this.props.toogleChecked(event.target.id);
  };

  changedEditModeHandler = event => {
    this.props.toogleEditMode(event.target.id);
  };

  onTaskChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  saveEditedTask = event => {
    const inputText = this.state.inputValue;
    this.props.saveEditedTask(inputText, this.props.id);
  };

  render() {
    return (
      <div key={this.props.id}>
        {/* если режим редактирования задачи false: */}
        {!this.props.editMode && (
          <div>
            <input
              type="checkbox"
              checked={this.props.checked}
              onChange={this.changedCheckboxHandler}
              id={this.props.id}
            />
            <span
              id={this.props.id}
              onClick={this.changedEditModeHandler}
              className={this.props.checked ? "completed" : null}
            >
              {this.props.text}
            </span>
            <button
              onClick={this.deleteTask}
              id={this.props.id}
              className="deleteButton"
            >
              x
            </button>
          </div>
        )}
        {/* если режим редактирования задачи true:  */}
        {this.props.editMode && (
          <div>
            <input
              autoFocus="true"
              type="text"
              onChange={this.onTaskChange}
              value={this.state.inputValue}
            />
            <div>
              <button onClick={this.saveEditedTask} className="addButton">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ToDo;
