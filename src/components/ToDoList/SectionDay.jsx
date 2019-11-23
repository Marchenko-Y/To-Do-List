import React from "react";
import ToDo from "./ToDo/ToDo";
import format from "date-fns/format";
import Calendar from "./Calendar/Calendar";

class TodoListComponent extends React.Component {
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
          updateEditedTaskText={this.props.updateEditedTaskText}
        />
      );
    });
    const totalTasks = tasks.length;

    return (
      <div>
        <span>
          <strong>{this.props.nameOfDay}</strong>

          {this.props.currentDate
            ? format(new Date(this.props.currentDate), " iii. dd MMM")
            : ""}
        </span>

        <div>{tasks}</div>

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

        <span>Total tasks : {totalTasks}</span>
      </div>
    );
  }
}

export default TodoListComponent;
