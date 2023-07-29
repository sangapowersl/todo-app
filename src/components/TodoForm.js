import React, { useState } from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input"
                value={value}
                placeholder='Ajouter une tache'
                onChange={(e) => setValue(e.target.value)}
                required
            />
            <button type="submit" className="todo-btn">Ajouter</button>
        </form>
    );
}

export default TodoForm;