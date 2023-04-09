import { Task } from "../Task/Task.jsx"
import { NewTask } from "../NewTask/NewTask.jsx"
import "./TodoList.css"
import { useState } from "react"

const initialTasks = [
  {
    title: "Hacer la compra",
    description: "Ir al supermercado a hacer la compra del mes",
    finished: false,
  },
  {
    title: "Ordenar los cajones",
    description: "Limpiar y ordenar los cajones de la estanteria antigua",
    finished: true,
  },
  {
    title: "Reparar la rueda del coche",
    description: "Buscar un mecanico que pueda reparar la rueda del coche antes de las 6",
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
