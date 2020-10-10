import React, { useState} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, markDone, deleteTodo }) => {

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => {
                        return <Todo todo={todo} key={i} i={i} markDone={markDone} deleteTodo={deleteTodo} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList