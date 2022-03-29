import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

const TodoCounter = (props) => {
  const { totalTodosCounter, completedTodosCounter } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodosCounter} de {totalTodosCounter} TODOs
    </h2>
  );
};

export default TodoCounter;
