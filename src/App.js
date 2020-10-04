import React, { useState } from 'react';

import TodoCreate from './Components/Todo/Create'
import TodoIndex from './Components/Todo/Index'

import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { description: 'Create main folder', status: 'pending' }, 
    { description: 'Finish project', status: 'pending' }, 
    { description: 'Finish this homework', status: 'pending' }
  ])

  const addTodo = (description) => {
    let cTodos = Object.assign([], todos);
    cTodos.push({ description: description, status: 'pending' });
    console.log(cTodos)
    setTodos(cTodos);
  }

  const markDone = (index) => {
    let cTodos = Object.assign([], todos)
    cTodos[index].status = 'done'
    setTodos(cTodos)
  }

  const deleteTodo = (index) => {
    let cTodos = Object.assign([], todos)
    cTodos.splice(index, 1)
    setTodos(cTodos)
  }

  return (
    <div className="App">
      <h1>To do List</h1>
      <TodoCreate addTodo={addTodo}/>
      <TodoIndex todos={todos} markDone={markDone} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
