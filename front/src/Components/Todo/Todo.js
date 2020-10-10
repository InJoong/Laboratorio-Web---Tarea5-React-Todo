import React from 'react';

const Todo = ({todo, i, markDone, deleteTodo}) => {

    const handleMarkDone = (event, index) => {
        markDone(index)
    }

    const handleDeleteTodo = (event, index) => {
        deleteTodo(index)
    }

    return (<tr key={i} style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
                <td>#{i+1}</td>
                <td>{todo.description}</td>
                <td>
                    {todo.status === 'pending' && (
                        <input type="button" value="done?" onClick={(e) => handleMarkDone(e, i)}/>
                    )}
                    <input type="button" value="delete" onClick={(e) => handleDeleteTodo(e, i)}/>
                </td>
            </tr>)
}

export default Todo