import React, { useState } from "react";

import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setOpenModal(() => false);
  };

  const onChangeTextArea = (evet) => {
    setNewTodoValue(evet.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(() => false);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeTextArea}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
