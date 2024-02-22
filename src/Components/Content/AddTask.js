import React from 'react'
import {FaPlus} from "react-icons/fa"
import { useRef } from 'react'

function AddTask({newTask, setNewTask, handleSubmit}) {

    const inputRef = useRef();


    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addTask'>Add Task</label>
            <input
                autoFocus
                ref={inputRef}
                id='addTask'
                type="text"
                placeholder='Type here to add a task...' 
                required
                value={newTask}
                onChange={(e)=> setNewTask(e.target.value)}
            />
            <button 
                type='submit' 
                aria-label='Add Task' 
                onClick={()=> inputRef.current.focus()}>
                <FaPlus/>
            </button>
        </form>

    )
}

export default AddTask