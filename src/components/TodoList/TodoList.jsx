import { Task } from "../Task/Task.jsx"
import { NewTask } from "../NewTask/NewTask.jsx"
import "./TodoList.css"
import { useState } from "react"

const initialTasks = [
  {
    title: "Go to the supermarket",
    description: "Go to the supermarket and buy the groceries for the current month",
    finished: false,
  },
  {
    title: "Tidy up the kids room",
    description: "Clean and tidy up the kids room. The carpet has to be removed",
    finished: true,
  },
  {
    title: "Fix the car tire",
    description: "Find a mechanic who can fix my tire before 6PM",
    finished: false,
  },
]

export function TodoList() {
    const [tasks, setTasks] = useState(initialTasks)

    const handleTasks = task => setTasks([...tasks, task])

    return (
        <div className="todolist-container">
            {
                tasks.map((task) => (
                <Task
                    key={task.title}
                    title={task.title}
                    description={task.description}
                    initialIsFinished={task.finished}
                />)
                )
            }
            <NewTask addTask={handleTasks}/>
        </div> 
    )
}
