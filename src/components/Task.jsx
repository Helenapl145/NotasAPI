import React from "react";
import {CgClose, CgInfo} from "react-icons/cg"
import { useNavigate } from "react-router-dom"

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    const navigate = useNavigate()

    const handleTaskDetails = () => {
        navigate(`/${task.title}`)
    }

    return (
        <div 
            className="task-container"
        
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div 
                className="task-title"  
                onClick={() => handleTaskClick(task.id)}  
                style={task.completed ? {textDecoration: 'line-through'} : {}}
            >
                {task.title}
            </div>
           
           <div className="button-container">
                <button 
                    className="remove-task-button"
                    onClick={() => handleTaskRemove(task.id)}
                >
                    <CgClose />
                </button>

                <button 
                    className="see-task-details-button"
                    onClick={handleTaskDetails}
                >
                    <CgInfo />
                </button>
           </div>
        </div>
    )
}

export default Task