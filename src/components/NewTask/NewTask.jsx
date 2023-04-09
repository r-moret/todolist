import { useState } from "react"
import "./NewTask.css"

export function NewTask({ addTask }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitle = title => setTitle(title.target.value)
    const handleDescription = description => setDescription(description.target.value)
    
    const handleNewTask = () => addTask({ 
        title: title, 
        description: description, 
        finished: false 
    })

    const titlePlaceholder = "Enter a new title..."
    const descriptionPlaceholder = "Enter the description for the new task..."

    return (
        <article className="task-article">
            <button onClick={handleNewTask}>Add</button>             
            <header className="task-header">
                <input 
                    placeholder={titlePlaceholder} 
                    onChange={handleTitle}
                    value={title}
                />
                <input 
                    placeholder={descriptionPlaceholder} 
                    onChange={handleDescription}
                    value={description}
                />                
            </header>
        </article>
    )
}


