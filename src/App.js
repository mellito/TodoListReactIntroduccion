// import './App.css';

import React from "react";
import CreateTodoButton from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";


const todos =[
  {
    text:'Cortar cebolla', 
    completed:false
  },
  {
    text:'Tomar curso de reac', 
    completed:true
  },
  {
    text:'Llorar con la LLorona', 
    completed:true
  },
   {
    text:'lalalal', 
    completed:false
  }
]

function App() {
  return (
    <>
      <TodoCounter/>
      
      <TodoSearch/>
        
      <TodoList>
        <ul>
          {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
        </ul>
       
      </TodoList>
      <CreateTodoButton/>
    
    </>
 
  );
}

export default App;
