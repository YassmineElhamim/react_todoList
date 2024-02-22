import React from 'react'
import TaskList from './TaskList'

function Content({tasks, handleCheck, handleDelete}) { 
    return (
        <>
            <div className='content'> 
                <div className='tasks'>
                    {tasks && tasks.length ? (
                        <TaskList
                        tasks={tasks}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}/>
                    ):(<h3 >Nothing...</h3>)}
                </div>
            </div>
        </>
    )}

export default Content