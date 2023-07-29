import React, { useState } from 'react'

function TodoEditForm({editTodo, task }) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("")
    }

    return (
        <form className='TodoEditForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input"
                value={value}
                placeholder='Mettre à jour la tache'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Modifier</button>
        </form>
    );
}

export default TodoEditForm;