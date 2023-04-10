import { Task } from "../Task/Task.jsx"
import { NewTask } from "../NewTask/NewTask.jsx"
import "./TodoList.css"
import { useState } from "react"

export function TodoList() {
    const [tasks, setTasks] = useState(() => {
      const tasksFromStorage = window.localStorage.getItem("tasks")

      if (tasksFromStorage) return JSON.parse(tasksFromStorage)
      return []
    })

    const addTask = task => {
      const newTasks = [...tasks, task]
      setTasks(newTasks)
      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    const updateTask = (task, index) => {
      const newTasks = [...tasks]
      newTasks[index] = task
      setTasks(newTasks)
      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    return (
        <div className="todolist-container">
            {
              tasks.map((task, index) => (
                <Task
                    index={index}
                    key={task.title}
                    title={task.title}
                    description={task.description}
                    isFinished={task.finished}
                    updateTask={updateTask}
                />
              ))
            }
            <NewTask addTask={addTask}/>
        </div> 
    )
}
