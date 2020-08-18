import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
    finish: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
      finish: "",
    });
  };

  handleTimeChange = (e) => {
    this.setState({
      finish: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="text-content"
            value={this.state.content}
            type="text"
            onChange={this.handleChange}
          />
          <input
            id="time-content"
            value={this.state.finish}
            type="time"
            onChange={this.handleTimeChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
