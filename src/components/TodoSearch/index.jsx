import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
