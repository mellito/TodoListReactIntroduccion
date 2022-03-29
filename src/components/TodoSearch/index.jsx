import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
};

export default TodoSearch;
