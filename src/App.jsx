import React, { useState, Fragment, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import axios from "axios";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Details from "./components/Details";
import "./App.css"



const App = () => {
  const [tasks, setTasks] = useState([])

  const handleTaskAddition = (taskTitle) => {
    if(taskTitle === ''){
      return
    }
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ]

    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed}
      }

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskRemove = (taskId) => {
   
    const newTask = tasks.filter(task => task.id !== taskId)
     
    setTasks(newTask)
     
    }

    const Task = () => (
      <Fragment>
            <AddTask 
            handleTaskAddition = {handleTaskAddition}
          />
          <Tasks 
            handleTaskClick = {handleTaskClick}
            handleTaskRemove = {handleTaskRemove}
            tasks={tasks}
          /> 
      </Fragment>
    )


    useEffect(() => {
      const fetchTasks = async () => {
        const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
        setTasks(data)
      }
      fetchTasks()
    }, [])

  return (
      <Router>
        <div className="container">
          <Header title='Minhas tarefas'/>
      
          <Routes>
            <Route path="/" exact Component={Task} />
            <Route path='/:taskTitle' exact Component={Details}/>
          </Routes>
            
        </div>
      </Router>
  )
}

export default App