import React, { useContext } from "react";
import CreateTodoButton from "../CreateTodoButton";
import TodoCounter from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    serchedTodos,
    handleCompleteTodo,
    handleDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate , hubo un error</p>}
        {loading && <p>Estamos cargando ,no desesperes...</p>}
        {!loading && !serchedTodos.length && <p>crea tu primer todo</p>}
        <ul>
          {serchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => handleCompleteTodo(todo.text)}
              onDelete={() => {
                handleDeleteTodo(todo.text);
              }}
            />
          ))}
        </ul>
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default AppUI;
