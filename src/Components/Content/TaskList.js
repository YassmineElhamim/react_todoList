import React from 'react'
import LineTask from './LineTask'


function TaskList({tasks,handleCheck, handleDelete}) {
    return (
        <ul>
            {tasks.map((task)=>(
                <LineTask
                key={task.id}
                task={task}
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
            ))}
        </ul>
    )
}

export default TaskList