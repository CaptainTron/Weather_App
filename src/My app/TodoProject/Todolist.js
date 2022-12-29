import React from 'react';
 
export default function Todolist({todo, toggle}){
    function togglehere(e){
        e.preventDefault()
        toggle(todo.id)
    }
    return (
        <div className={todo.complete ? "strike" : ""} key={todo.id} onClick={togglehere} >
            <p>{todo.task}   <span className='time'>{todo.time}</span></p>
        </div>
    )
}