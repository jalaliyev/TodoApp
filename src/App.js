import React, { Component } from "react";
import Todos from "./Todos";
import "./index.css";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Demo", time: "23:42", finish: "11:54" }],
  };
  delteItem = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let now = new Date();
    todo.time = `${now.getHours()}:${now.getMinutes()}`;
    let newTodo = [...this.state.todos, todo];
    this.setState({
      todos: newTodo,
    });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos delItem={this.delteItem} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
