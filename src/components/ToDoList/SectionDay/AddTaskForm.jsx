import React from "react";
import Calendar from "../Calendar/Calendar";

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

  onTaskChange = event => {
    const text = event.target.value;
    this.props.updateTask(text);
  };

  render() {
    return (
      <>
        {!this.state.addMode && (
          <div>
            + <button onClick={this.activatedAddMode}>Add task</button>
          </div>
        )}

        {this.state.addMode && (
          <>
            <div>
              <input
                type="text"
                placeholder="Введите сообщение"
                onChange={this.onTaskChange}
                value={this.props.newTaskText}
              />
            </div>
            <div>
              <Calendar
                updateDate={this.props.updateDate}
                newTaskDate={this.props.newTaskDate}
                currentDate={this.props.currentDate}
              />
            </div>
            <div>
              <button className="addButton" onClick={this.props.addTask}>
                Add task
              </button>
              <button onClick={this.deactivatedAddMode}>Cancel</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default AddTaskForm;
