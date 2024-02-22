import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'


function LineTask({task,handleCheck, handleDelete}) {
    return (
        <li className='task' >
                        <input type='checkbox' onChange={()=>handleCheck(task.id)} checked={task.checked}/>
                        <label  style={(task.checked)?{textDecoration:'line-through'} : null}
                            onDoubleClick={() => handleCheck(task.id)}>{task.task}</label>
                        <FaTrashAlt onClick={()=>handleDelete(task.id)} role="button" tabIndex="0" 
                            aria-label={`Delete ${task.task}`} />
                    </li>
    )}
export default LineTask