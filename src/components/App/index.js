import { useTodos } from "./useTodos";
import CreateTodoButton from "../CreateTodoButton";
import TodoCounter from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoError from "../TodoError/TodoError";
import TodoLoading from "../TodoLoading/TodoLoading";
import EmptyTodos from "../EmptyTodos/EmptyTodos";

function App() {
  const {
    error,
    loading,
    serchedTodos,
    handleCompleteTodo,
    handleDeleteTodo,
    openModal,
    setOpenModal,
    totalTodosCounter,
    completedTodosCounter,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodosCounter={totalTodosCounter}
          completedTodosCounter={completedTodosCounter}
        />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        todos={serchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        renderItem={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => handleCompleteTodo(todo.text)}
            onDelete={() => {
              handleDeleteTodo(todo.text);
            }}
          />
        )}
      />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
