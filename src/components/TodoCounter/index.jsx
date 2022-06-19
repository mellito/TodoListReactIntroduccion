import "./TodoCounter.css";

const TodoCounter = ({ totalTodosCounter, completedTodosCounter }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodosCounter} de {totalTodosCounter} TODOs
    </h2>
  );
};

export default TodoCounter;
