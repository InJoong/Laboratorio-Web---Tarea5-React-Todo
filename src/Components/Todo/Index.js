import React, { useState} from 'react'

const Index = ({ todos, markDone, deleteTodo }) => {

    const handleMarkDone = (event, index) => {
        markDone(index)
    }

    const handleDeleteTodo = (event, index) => {
        deleteTodo(index)
    }

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
                        return (
                            <tr key={i} style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
                                <td>#{i+1}</td>
                                <td>{todo.description}</td>
                                <td>
                                    {todo.status === 'pending' && (
                                        <input type="button" value="done?" onClick={(e) => handleMarkDone(e, i)}/>
                                    )}
                                    <input type="button" value="delete" onClick={(e) => handleDeleteTodo(e, i)}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Index