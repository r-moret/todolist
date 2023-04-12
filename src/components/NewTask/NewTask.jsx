import "./NewTask.css"
import "../Task/Task.css"
import { AddIcon } from "../AddIcon/AddIcon"

export function NewTask({ addTask }) {
    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const task = Object.fromEntries(formData.entries())

        if (task.title && task.description) {
            addTask({ 
                title: task.title, 
                description: task.description, 
                finished: false 
            })

            event.target.reset()
        }    
    }

    const titlePlaceholder = "Enter a new task..."
    const descriptionPlaceholder = "Enter the description for the new task..."

    return (
        <article className="task-article">
            <form onSubmit={handleSubmit} className="newtask-form">
                <aside className="task-aside">
                    <button className="task-icon-button" type="submit">
                        <AddIcon />
                    </button>             
                </aside>
                <header className="task-header">
                    <input 
                        className="newtask-input newtask-title task-title"
                        placeholder={titlePlaceholder}
                        defaultValue=""
                        name="title"
                    />
                    <input 
                        className="newtask-input newtask-description task-description"
                        placeholder={descriptionPlaceholder} 
                        defaultValue=""
                        name="description"
                    />              
                </header>
            </form>  
        </article>
    )
}


