import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.todos.length && props.onEmptyTodos()}
      {props.todos.map(props.renderItem)}
    </section>
  );
};

export default TodoList;
