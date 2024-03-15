import React, { useState } from "react";
import "./AddTask.css"
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    const [data, setData] = useState('')

    const handleInputChange = (e) => {
        setData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(data)
        setData("")
    }

    return(
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={data}
                className="add-task-input" 
                type="text" 
            />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask