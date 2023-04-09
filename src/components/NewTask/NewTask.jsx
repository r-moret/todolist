import { useState } from "react"
import "./NewTask.css"
import "../Task/Task.css"
import { AddIcon } from "../AddIcon/AddIcon"

export function NewTask({ addTask }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitle = title => setTitle(title.target.value)
    const handleDescription = description => setDescription(description.target.value)
    
    const handleNewTask = () => {
        if (title && description) {
            addTask({ 
                title: title, 
                description: description, 
                finished: false 
            })
    
            setTitle("")
            setDescription("")
        }
    }
    const titlePlaceholder = "Enter a new title..."
    const descriptionPlaceholder = "Enter the description for the new task..."

    return (
        <article className="task-article">
            <aside className="task-aside">
                <button className="task-icon-button" onClick={handleNewTask}>
                    <AddIcon />
                </button>             
            </aside>
            <header className="task-header">
                <input 
                    className="newtask-input newtask-title task-title"
                    placeholder={titlePlaceholder} 
                    onChange={handleTitle}
                    value={title}
                />
                <input 
                    className="newtask-input newtask-description task-description"
                    placeholder={descriptionPlaceholder} 
                    onChange={handleDescription}
                    value={description}
                />                
            </header>
        </article>
    )
}


