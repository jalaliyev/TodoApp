import React from "react";

const Todos = ({ todos, delItem }) => {
  const todoList = todos.length ? (
    todos.map((todos) => {
      return (
        <div className="collection-item" key={todos.id}>
          <button
            onClick={() => {
              delItem(todos.id);
            }}
            className="del-block"
          >
            X
          </button>
          <span
            onClick={() => {
              delItem(todos.id);
            }}
            className="collection"
          >
            {todos.content}
          </span>

          <span className="time">
            {todos.time}~{todos.finish}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
