import React, { createContext, useState } from "react";
import { useLocalStorageTodo } from "../TodoContext/useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorageTodo("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodosCounter = todos.filter((todo) => !!todo.completed).length;
  const totalTodosCounter = todos.length;

  let serchedTodos = [];

  if (!searchValue.length >= 1) {
    serchedTodos = todos;
  } else {
    serchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      copleted: false,
      text,
    });
    saveTodos(newTodos);
  };

  const handleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updateListTodo = [...todos];
    const TaskState = updateListTodo[todoIndex].completed;
    updateListTodo[todoIndex].completed = !TaskState;
    saveTodos(updateListTodo);
  };

  const handleDeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updateListTodo = [...todos];
    updateListTodo.splice(todoIndex, 1);
    saveTodos(updateListTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodosCounter,
        completedTodosCounter,
        searchValue,
        setSearchValue,
        serchedTodos,
        handleCompleteTodo,
        handleDeleteTodo,
        addTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
