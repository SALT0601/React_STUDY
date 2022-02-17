
import React from 'react';
import './css/todos.css';
//넘어온 값이 있어서 props
function TodoListItem(props) {

    const { todo, updateTodo, deleteTodo, index } = props;

    return (
        <tr>
            <td>{todo.id}/ {index + 1}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td>
                {/* id있어야 하니 이벤트 받음 */}
                <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
            </td>
            <td>

                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default TodoListItem;
