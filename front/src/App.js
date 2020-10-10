import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TodoCreate from './Components/Todo/Create'
import TodoList from './Components/Todo/TodoList'

import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/', { headers: { Accept: 'aplication/json' } })
    .then((res) => {
      console.log(res)
      setTodos(res.data)
    })
  }, [])

  const addTodo = (description) => {

    axios.post('http://localhost:3000/tasks', {description}, { headers: { Accept: 'aplication/json' } })
    .then((response) => {
      let cTodos = Object.assign([], todos);
      cTodos.push({ description: description, status: 'pending', id: response.data.id });
      console.log(cTodos)
      setTodos(cTodos);
    })
  }

  const markDone = (index) => {
    let cTodos = Object.assign([], todos)
    axios.post('http://localhost:3000/update', {id: cTodos[index].id}, { headers: { Accept: 'aplication/json' } })
      .then((res) => {
        let cTodos = Object.assign([], todos)
        cTodos[index].status = 'done'
        setTodos(cTodos)
    })
  }

  const deleteTodo = (index) => {
    let cTodos = Object.assign([], todos)
    axios.post('http://localhost:3000/delete', {id: cTodos[index].id}, { headers: { Accept: 'aplication/json' } })
      .then((res) => {
        let cTodos = Object.assign([], todos)
        cTodos.splice(index, 1)
        setTodos(cTodos)
      })
  }

  return (
    <div className="App">
      <h1>To do List</h1>
      <TodoCreate addTodo={addTodo}/>
      <TodoList todos={todos} markDone={markDone} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
